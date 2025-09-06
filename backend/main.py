import io
import pathlib
from datetime import datetime
from typing import Union, Iterable

from PIL import Image
from fastapi import FastAPI, UploadFile
from fastapi.staticfiles import StaticFiles
from pdfrw import PdfReader
from pdfrw.buildxobj import pagexobj
from pdfrw.toreportlab import makerl
from reportlab.pdfgen import canvas as rl_canvas
from starlette.responses import FileResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="static/", html=True), name="static")


@app.get("/", include_in_schema=False)
def read_root():
    index_path = pathlib.Path("static/index.html")
    return FileResponse(index_path)


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.post("/api/merge")
async def merge_pdf_files(files: list[UploadFile]):
    buffer = merge_pdfs(files)
    output_dir = pathlib.Path("temp_files")
    output_dir.mkdir(exist_ok=True)
    file_path = output_dir / f"merged_{datetime.now().strftime('%Y_%m_%d_%H_%M_%S')}.pdf"
    file_path.write_bytes(buffer.getvalue())
    return FileResponse(file_path, media_type="application/pdf", filename="merged.pdf")


@app.post("/api/jpgpdf")
async def convert_jpg_to_pdf(files: list[UploadFile]):
    il = []
    for file in files:
        image = Image.open(file.file)
        im = image.convert('RGB')
        il.append(im)
    output_dir = pathlib.Path("temp_files")
    output_dir.mkdir(exist_ok=True)
    file_path = output_dir / f"converted_{datetime.now().strftime('%Y_%m_%d_%H_%M_%S')}.pdf"
    il[0].save(file_path, save_all=True, append_images=il[1:])
    return FileResponse(file_path, media_type="application/pdf", filename="converted.pdf")


def merge_pdfs(files: Iterable[UploadFile]) -> io.BytesIO:
    """
    Merges the passed PDF-files to a single PDF Memory-Buffer.

    :param files: Iterable of UploadFile objects containing PDFs.
    :return: BytesIO buffer, containing the merged PDF
    """
    buffer = io.BytesIO()
    canvas = rl_canvas.Canvas(buffer)
    for file in files:
        pages = PdfReader(file.file).pages
        pages = [pagexobj(page) for page in pages]

        for page in pages:
            canvas.setPageSize((page.BBox[2], page.BBox[3]))
            canvas.doForm(makerl(canvas, page))
            canvas.showPage()

    canvas.save()
    buffer.seek(0)
    return buffer
