export const asset = (filename: string) =>
  `/assets/${filename.split("/").map(encodeURIComponent).join("/")}`;

export const FILES = {
  resume: asset("rex_navarro_cv_updated.pdf"),
  capstonePdf: asset("1816-RENTAL-LEGIT.pdf"),
  capstoneNotes: asset("BUSINESS ANALYSTS NOTES.docx"),
  sqlScript: asset("cleaning_data.sql"),
  layoffsCsv: asset("layoffs.csv"),
  powerBiPbix: asset("PBI VISUALIZATION FROM ALEX.pbix"),
  superstoreXlsx: asset("Power BI Dashboard - Superstore.xlsx"),
} as const;
