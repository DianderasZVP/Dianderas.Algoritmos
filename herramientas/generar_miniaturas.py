from pathlib import Path

from PIL import Image, ImageOps


EXTENSIONES_IMAGEN = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff"}
ANCHO_MINIATURA = 400


def generar_miniaturas(raiz: Path) -> int:
    carpeta_infografias = raiz / "infografias"
    carpeta_miniaturas = carpeta_infografias / "miniaturas"
    archivos = (
        archivo
        for archivo in carpeta_infografias.rglob("*")
        if archivo.is_file()
        and archivo.suffix.lower() in EXTENSIONES_IMAGEN
        and "miniaturas" not in archivo.relative_to(carpeta_infografias).parts
    )

    procesadas = 0
    for archivo in archivos:
        relativa = archivo.relative_to(carpeta_infografias)
        destino = (carpeta_miniaturas / relativa).with_suffix(".webp")
        destino.parent.mkdir(parents=True, exist_ok=True)

        with Image.open(archivo) as imagen:
            imagen = ImageOps.exif_transpose(imagen)
            alto = round(imagen.height * ANCHO_MINIATURA / imagen.width)
            modo = "RGBA" if "A" in imagen.getbands() else "RGB"
            miniatura = imagen.convert(modo).resize(
                (ANCHO_MINIATURA, alto), Image.Resampling.LANCZOS
            )
            miniatura.save(destino, "WEBP", quality=78, method=6)
        procesadas += 1

    return procesadas


if __name__ == "__main__":
    raiz_repositorio = Path(__file__).resolve().parents[1]
    cantidad = generar_miniaturas(raiz_repositorio)
    print(f"Miniaturas WebP generadas: {cantidad}")