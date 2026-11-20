import { FILES } from "@/lib/assets";

export const categories = [
  { id: "all", label: "All" },
  { id: "ba", label: "Business Analysis & Capstone" },
  { id: "sql", label: "SQL & Data Cleaning" },
  { id: "powerbi", label: "Power BI & BI" },
  { id: "excel", label: "Excel & Analytics" },
  { id: "systems", label: "System UIs" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type PortfolioFile = { href: string; label: string };

export type PortfolioShot = {
  src: string;
  alt: string;
  caption: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  tag: string;
  category: Exclude<CategoryId, "all">;
  role: string;
  problem: string;
  approach: string;
  outcome: string;
  shots: PortfolioShot[];
  files: PortfolioFile[];
};

const shot = (file: string, caption: string): PortfolioShot => ({
  src: `/screenshots/${file}.png`,
  alt: caption,
  caption,
});

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "1816-car-rental-capstone",
    title: "1816 Car Rental Co. — BA Capstone",
    tag: "BA Capstone",
    category: "ba",
    role: "BSIT student at Pamantasan ng Lungsod ng Pasig, using the capstone as business-analysis practice: requirements, stakeholder documentation, and the written system record in the capstone PDF.",
    problem:
      "My notes use 1816 as the example of a business driver: a manual booking process that often double-books and costs customer trust. The driver is that operating problem, not a label such as owner or renter.",
    approach:
      "The written record is the capstone PDF, with the working notes kept in BUSINESS ANALYSTS NOTES.docx. Those notes separate business drivers from stakeholder names and place user acceptance testing after development, once a user can try the finished system.",
    outcome:
      "Two owner dashboard captures show recorded booking value, active rentals, vehicle availability, revenue, fleet status, and pending actions. The figures and statuses shown are sample data from the captured interface.",
    shots: [
      shot(
        "1816 dashboard",
        "1816 Car Rental owner dashboard overview with revenue, active rentals, fleet utilization, and fleet status.",
      ),
      shot(
        "1816 dashboard 2",
        "1816 owner workspace dashboard showing recorded booking value, ongoing rentals, vehicle availability, and pending actions.",
      ),
    ],
    files: [
      { href: FILES.capstonePdf, label: "Capstone PDF" },
      { href: FILES.capstoneNotes, label: "BA notes (DOCX)" },
    ],
  },
  {
    slug: "sql-layoffs-cleaning",
    title: "SQL Layoffs Cleaning & EDA",
    tag: "SQL",
    category: "sql",
    role: "I cleaned the global layoffs table in MySQL Workbench, schema world_layoffs, using cleaning_data.sql. There is no screenshot of the raw layoffs.csv because I do not have an unclean copy captured.",
    problem:
      "The source table could not be edited in place. Duplicate rows, padded company names, mixed Crypto industry labels, a trailing dot on United States, text dates, blank industry values, and rows with no layoff figures all sat in the same file.",
    approach:
      "The script copies layoffs into layoffs_staging, then finds duplicates with a CTE and ROW_NUMBER() partitioned by company, location, industry, both layoff fields, date, stage, country, and funds raised. MySQL would not delete through that CTE, so the script creates layoffs_staging2, deletes row_num greater than 1, trims company, collapses Crypto% to Crypto, trims the trailing dot on United States, converts the text date with STR_TO_DATE and alters the column to DATE, fills a blank industry with a self-join on company, deletes rows where both layoff fields are null, and drops row_num. A later query in sql file 4 builds a monthly total and a rolling SUM() over that month from layoffs_staging2.",
    outcome:
      "The Workbench screenshots show the duplicate check (including Casper), the staging2 result, the industry self-join, the STR_TO_DATE update, the sql file 4 CASE tab, and the rolling monthly total. GROUP BY / HAVING and JOIN practice from the DATA script tab are included beside that work.",
    shots: [
      shot(
        "cleaning-data-sql-cte-rrow-number",
        "cleaning_data.sql: CTE with ROW_NUMBER() on layoffs_staging. The result grid lists duplicate groups, including Casper. The screenshot filename preserves its original spelling.",
      ),
      shot(
        "cleaning-data-sql-duplicate-check",
        "cleaning_data.sql duplicate check in MySQL Workbench against the layoffs staging table.",
      ),
      shot(
        "cleaning-data-sql-select-from-layoffs-staging2-output",
        "SELECT from layoffs_staging2 after the staging copy used for the delete step.",
      ),
      shot(
        "cleaning-data-sql-join",
        "cleaning_data.sql self-join used to fill a blank industry from another row of the same company.",
      ),
      shot(
        "cleaning-data-sql-str-to-date",
        "cleaning_data.sql converting the text date column with STR_TO_DATE before the column is altered to DATE.",
      ),
      shot(
        "sql-file-4-case-statement",
        "sql file 4 open on the CASE statement query. This tab sits next to the layoffs cleaning script in the same Workbench session.",
      ),
      shot(
        "sql-file-4-with-rolling-total-as",
        "sql file 4: monthly SUM(total_laid_off) from layoffs_staging2 and a rolling SUM() OVER (ORDER BY MONTH).",
      ),
      shot(
        "data-group-by-having",
        "DATA script tab showing GROUP BY with HAVING. Kept with the SQL case study because it is part of the same Workbench session.",
      ),
      shot(
        "data-join",
        "DATA script tab showing a JOIN. Kept with the SQL case study as the join practice captured beside the layoffs work.",
      ),
    ],
    files: [
      { href: FILES.sqlScript, label: "cleaning_data.sql" },
      { href: FILES.layoffsCsv, label: "layoffs.csv" },
    ],
  },
  {
    slug: "excel-data-cleaning",
    title: "Cleaning Data in Excel",
    tag: "Excel",
    category: "excel",
    role: "Practice workbook named Data Cleaning Tutorial Excel. The sheet itself does not store the cleaning formulas, so the steps below are the ones written under CLEANING DATA IN EXCEL in my notes.",
    problem:
      "The US Presidents sheet mixes name casing, party labels that can disagree by a letter, extra spaces in the vice column, salary values that still carry currency formatting and .00, and dates that need a short date format.",
    approach:
      "Notes: Data > Remove Duplicates; a helper column with =PROPER() or =UPPER() on the name; Data > Filter plus conditional-formatting duplicate highlights to catch typos such as Republican versus Republicans; TRIM in a helper column for the vice column; convert salary from currency to Number and drop .00; format dates as Short Date.",
    outcome:
      "The screenshot shows the tutorial sheet with president, prior, party, vice, salary, and the two date columns. The formula steps stay in the notes because they are not stored in the sheet.",
    shots: [
      shot(
        "data-cleaning-excel-tutorial-xlsx",
        "Data Cleaning Excel Tutorial.xlsx, sheet of US presidents, with party, vice, salary, and date columns. Formulas are not stored in this sheet.",
      ),
    ],
    files: [
      { href: FILES.excelCleaning, label: "Data Cleaning Excel Tutorial.xlsx" },
      { href: FILES.capstoneNotes, label: "Notes: CLEANING DATA IN EXCEL" },
    ],
  },
  {
    slug: "excel-bike-buyers",
    title: "Excel Bike Buyers Project",
    tag: "Excel",
    category: "excel",
    role: "Full Excel project in Excel Project Dataset.xlsx. My notes say to keep three sheets: Working Sheet, Dashboard, and Pivot Table, and to build the pivot only from the cleaned working sheet.",
    problem:
      "The bike buyers table needed a cleaning pass before any chart: duplicates, letter codes such as M that a reader cannot interpret, salary still showing two decimal places, and ages that were more useful as brackets.",
    approach:
      "Notes for this project: turn on Filter, then Data > Remove Duplicates. Replace single-letter codes with Find and Replace set to search by columns. Set salary to Currency and remove .00. Add an Age Bracket column with the nested IF in the notes: 55 and over as Old, 31 and over as Middle Age, under 31 as Adolescent. Build the pivot from the working sheet, chart it with axis titles, and copy those charts to a dashboard with gridlines off and slicers connected through Report Connections.",
    outcome:
      "The dashboard sheet is titled Bike Sales Dashboard. It shows slicers for marital status, region, education, and gender, plus charts for average income per gender, bikes purchased by age bracket, and bikes purchased by commute distance.",
    shots: [
      shot(
        "excel-project-dataset-bike-buyers-sheet",
        "bike_buyers sheet, the source table for the Excel project.",
      ),
      shot(
        "excel-project-dataset-working-sheet",
        "Working Sheet. The notes say this cleaned sheet is the only basis for the pivot.",
      ),
      shot(
        "excel-project-dataset-pivot-table-sheet",
        "Pivot Table sheet built from the working sheet.",
      ),
      shot(
        "excel-project-dataset-dasboard-sheet",
        "Dashboard sheet, filename spelled Dasboard. Bike Sales Dashboard with slicers and the three charts described above.",
      ),
    ],
    files: [{ href: FILES.excelProject, label: "Excel Project Dataset.xlsx" }],
  },
  {
    slug: "excel-lookups-and-formulas",
    title: "Excel Lookups and Formula Templates",
    tag: "Excel",
    category: "excel",
    role: "Tutorial workbooks for lookup functions and everyday formulas: XLOOKUP Excel Tutorial File.xlsx and Formula Excel Template.xlsx.",
    problem:
      "The lookup file is an employee list split across sheets so a lookup has to return a matching person. The formula template isolates one function per sheet instead of mixing them in a report.",
    approach:
      "The XLOOKUP workbook has separate sheets for exact match, search order, horizontal lookup, lookup with SUM, and VLOOKUP. The formula template has its own sheets for TRIM, CONCATENATE, DATE TO TEXT, IF/IFS, COUNTIFS, and SUMIFS. The extra screenshot from 20 Nov 2026 is the same XLOOKUP file, opened on the VLookUp sheet, showing the employee columns beside the name and email list.",
    outcome:
      "Each screenshot is one sheet of those workbooks. They document the function I was practicing on that sheet, not a separate business dataset.",
    shots: [
      shot(
        "xlookup-excel-tutorial-file-xlsx-xlookup",
        "XLOOKUP sheet in XLOOKUP Excel Tutorial File.xlsx.",
      ),
      shot(
        "xlookup-excel-tutorial-file-xlsx-vlookup",
        "VLOOKUP sheet in the same tutorial workbook.",
      ),
      shot(
        "screenshot-2026-11-20-173519",
        "Same XLOOKUP workbook on the VLookUp sheet: employee ID, names, gender, age, job, salary, and dates beside the name and email list.",
      ),
      shot(
        "formula-excel-template-xlsx-trim",
        "Formula Excel Template.xlsx, TRIM sheet.",
      ),
      shot(
        "formula-excel-template-xlsx-concatenate",
        "Formula Excel Template.xlsx, CONCATENATE sheet.",
      ),
      shot(
        "formula-excel-template-xlsx-date-to-text",
        "Formula Excel Template.xlsx, DATE TO TEXT sheet.",
      ),
      shot(
        "formula-excel-template-xlsx-if-ifs",
        "Formula Excel Template.xlsx, IF / IFS sheet.",
      ),
      shot(
        "formula-excel-template-xlsx-countifs",
        "Formula Excel Template.xlsx, COUNTIFS sheet.",
      ),
      shot(
        "formula-excel-template-xlsx-sumifs",
        "Formula Excel Template.xlsx, SUMIFS sheet.",
      ),
    ],
    files: [
      { href: FILES.xlookup, label: "XLOOKUP Excel Tutorial File.xlsx" },
      { href: FILES.formulaTemplate, label: "Formula Excel Template.xlsx" },
    ],
  },
  {
    slug: "excel-charts-and-formatting",
    title: "Excel Charts and Conditional Formatting",
    tag: "Excel",
    category: "excel",
    role: "Two tutorial files: Excel Charts Tutorial File.xlsx and Conditional Formatting Excel Tutorial File.xlsx.",
    problem:
      "Chart practice needed a sales table and a chart sheet. Conditional formatting practice needed both a demographics sheet and a sales sheet so the rules were visible on the data they mark.",
    approach:
      "My chart notes say to insert the chart from a pivot, turn off subtotals and grand totals, and keep the header row. The chart tutorial screenshots are the chart sheet and the sales sheet of that workbook. The conditional formatting screenshots are the demographics sheet and the sales sheet.",
    outcome:
      "The four screenshots are the sheets as saved. They are tutorial outputs, shown separately from the bike buyers dashboard.",
    shots: [
      shot(
        "excel-charts-tutorial-file-xlsx-chart-sheet",
        "Excel Charts Tutorial File.xlsx, Chart sheet.",
      ),
      shot(
        "excel-charts-tutorial-file-xlsx-sales-sheet",
        "Excel Charts Tutorial File.xlsx, Sales sheet.",
      ),
      shot(
        "conditional-formatting-excel-tutorial-file-xlsx-demographics-sheet",
        "Conditional Formatting Excel Tutorial File.xlsx, Demographics sheet.",
      ),
      shot(
        "conditional-formatting-excel-tutorial-file-xlsx-sales-sheet",
        "Conditional Formatting Excel Tutorial File.xlsx, Sales sheet.",
      ),
    ],
    files: [
      { href: FILES.excelCharts, label: "Excel Charts Tutorial File.xlsx" },
      {
        href: FILES.conditionalFormatting,
        label: "Conditional Formatting Excel Tutorial File.xlsx",
      },
    ],
  },
  {
    slug: "sales-csv-pivot",
    title: "Sales.csv Pivot",
    tag: "Excel",
    category: "excel",
    role: "Sales.csv.zip, with a sales sheet and a pivot table sheet captured from that file.",
    problem:
      "The sales extract needed a pivot on top of the flat sales sheet. The screenshots are the two views I kept: the sales sheet and the pivot.",
    approach:
      "The notes for pivots say to start from the sheet that holds the records, Insert > Pivot Table, and use that pivot as the source for a chart. These two screenshots are that pair for Sales.csv.",
    outcome:
      "Sales sheet and pivot table sheet from Sales.csv.zip. No other dashboard screenshot is included for this file.",
    shots: [
      shot("sales-csv-zip-sales-sheet", "Sales.csv.zip, Sales sheet."),
      shot("sales-csv-zip-pivot-table", "Sales.csv.zip, Pivot Table sheet."),
    ],
    files: [{ href: FILES.salesZip, label: "Sales.csv.zip" }],
  },
  {
    slug: "purchase-power-query",
    title: "Purchase Data — Power Query and Report",
    tag: "Power BI",
    category: "powerbi",
    role: "Completed Power Query transformation. The file is still named UNFINISH TRANSFORMING DATA.pbix because I did not rename it. The report built from this purchase data is PBI VISUALIZATION FROM ALEX.pbix.",
    problem:
      "The purchase extract arrived in a shape that needed Power Query steps before a store-and-product report: extra top rows, a header that was not promoted, columns to remove, and values that had to be unpivoted.",
    approach:
      "The Purchase Overview query shows these applied steps: Source, Navigation, Changed column type, Removed Top Rows, Promoted Headers, Changed Type, Filtered Rows, Removed Columns, Unpivoted Columns, and Renamed Columns. The formula bar renames the unpivoted columns to Value, Product_Cost, Location, and Store. My Power Query notes match that sequence: remove top rows that are not data, use the first row as headers, set currency to fixed decimal, and filter out empty or total rows. The same notes flag date types that do not match across sheets.",
    outcome:
      "Purchase Overview lists Store, Products, Attribute, and Product_Cost for stores including Costco and Target. The Alex report view then charts average price by store for Walmart, Target, and Costco, and average price by product for Rice, Dried Beans, Bottled Water, and Canned Vegetables. A table view of that same file is included.",
    shots: [
      shot(
        "unfinish-transforming-data-pbix-purchase-overview",
        "Completed Purchase Overview query in UNFINISH TRANSFORMING DATA.pbix. Applied steps end at Renamed Columns.",
      ),
      shot(
        "unfinish-transforming-data-pbix-pivot-table",
        "Pivot Table query in the same completed Power Query file.",
      ),
      shot(
        "pbi-visualization-from-alex-pbix-report-view",
        "PBI VISUALIZATION FROM ALEX.pbix report view: Total by Store and Best Purchase for Products.",
      ),
      shot(
        "pbi-visualization-from-alex-pbix-table-view",
        "Table view of PBI VISUALIZATION FROM ALEX.pbix.",
      ),
    ],
    files: [
      { href: FILES.powerQueryPbix, label: "Power Query file (.pbix)" },
      { href: FILES.powerBiPbix, label: "Alex report (.pbix)" },
    ],
  },
  {
    slug: "apocalypse-food-prep",
    title: "Apocalypse Food Prep — Power Query and DAX",
    tag: "Power BI",
    category: "powerbi",
    role: "Tutorial set under the Apocalypse Food Prep workbooks, plus DAX.pbix. The report uses Apocalypse Sales and Apocalypse Store.",
    problem:
      "The prep workbook is split into a sales sheet and a store sheet, with a separate Power Query editor tutorial that tracks purchases before a report is built.",
    approach:
      "Screenshots cover the base Apocalypse Food Prep sheet, the DAX tutorial sales and store sheets, and the Power Query editor tutorial sheets: Pivot Table, Purchase Overview, and Purchase Tracker. DAX.pbix then shows a report page and a table view on those Apocalypse tables.",
    outcome:
      "The DAX.pbix report view is a table of Count of Sales by customer and a table of Sum of Products Sold by product, with Apocalypse Sales and Apocalypse Store in the data pane. The table view shows the fields behind that page.",
    shots: [
      shot("apocolypse-food-prep", "Apocolypse Food Prep.xlsx."),
      shot(
        "apocolypse-food-prep-dax-tutorial-apocalypse-sales-sheet",
        "DAX tutorial workbook, Apocalypse Sales sheet.",
      ),
      shot(
        "apocolypse-food-prep-dax-tutorial-apocalypse-store-sheet",
        "DAX tutorial workbook, Apocalypse Store sheet.",
      ),
      shot(
        "apocolypse-food-prep-power-query-editor-tutorial-pivot-table-sheet",
        "Power Query editor tutorial, Pivot Table sheet.",
      ),
      shot(
        "apocolypse-food-prep-power-query-editor-tutorial-purchase-overview",
        "Power Query editor tutorial, Purchase Overview sheet.",
      ),
      shot(
        "apocolypse-food-prep-power-query-editor-tutorial-purchase-tracker-sheet",
        "Power Query editor tutorial, Purchase Tracker sheet.",
      ),
      shot(
        "dax-pbix-report-view",
        "DAX.pbix report view: Count of Sales by customer and Sum of Products Sold, from Apocalypse Sales and Apocalypse Store.",
      ),
      shot("dax-pbix-table-view", "DAX.pbix table view of the same model."),
    ],
    files: [
      { href: FILES.apocalypse, label: "Apocolypse Food Prep.xlsx" },
      { href: FILES.apocalypseDax, label: "DAX tutorial workbook" },
      { href: FILES.apocalypseQuery, label: "Power Query tutorial workbook" },
      { href: FILES.daxPbix, label: "DAX.pbix" },
    ],
  },
  {
    slug: "superstore-workbook",
    title: "Superstore Orders and Returns",
    tag: "Power BI",
    category: "powerbi",
    role: "Source workbook Power BI Dashboard - Superstore.xlsx. The screenshots folder has the Orders sheet and the Returns sheet only. There is no separate Superstore Power BI report screenshot.",
    problem:
      "The workbook holds the order lines and a returns sheet that a model would have to relate. In the Orders screenshot, Order Date and Ship Date display as #####, so those columns are not readable as dates in that view.",
    approach:
      "I kept the two sheet screenshots as the evidence: Orders, with columns from Row ID through Category and Sub-Category, and Returns. Power Query notes that apply to any file like this are in the notes: remove non-data top rows, promote headers, set currency to fixed decimal, and check that date types match before a visual is built.",
    outcome:
      "What can be shown is the Orders sheet and the Returns sheet. The workbook file is available to download. A Superstore dashboard image is not included because it is not in the screenshots folder.",
    shots: [
      shot(
        "power-bi-dashboard-superstore-xlsx-orders-sheet",
        "Orders sheet. Order Date and Ship Date display as #####. Columns run from Row ID through Sub-Category.",
      ),
      shot(
        "power-bi-dashboard-superstore-xlsx-returns-sheet",
        "Returns sheet in the same Superstore workbook.",
      ),
    ],
    files: [{ href: FILES.superstoreXlsx, label: "Superstore workbook (.xlsx)" }],
  },
  {
    slug: "financial-sample",
    title: "Financial Sample Workbook",
    tag: "Power BI",
    category: "powerbi",
    role: "What is Power BI - Financial Sample.xlsx, captured on Sheet 1.",
    problem:
      "This file is the financial sample used while learning how a Power BI source sheet is laid out. The only screenshot is Sheet 1.",
    approach:
      "The screenshot is the sheet as opened. I am not attaching a report view, because none was captured for this workbook.",
    outcome:
      "Sheet 1 of the financial sample workbook, plus the file download.",
    shots: [
      shot(
        "what-is-power-bi-financial-sample-xlsx-sheet-1",
        "What is Power BI - Financial Sample.xlsx, Sheet 1.",
      ),
    ],
    files: [{ href: FILES.financialSample, label: "Financial Sample.xlsx" }],
  },
  {
    slug: "coursedock-cms",
    title: "CourseDock CMS",
    tag: "System UI",
    category: "systems",
    role: "BSIT student at Pamantasan ng Lungsod ng Pasig. CourseDock is a coursework-monitoring system. The screenshot is the College of Computer Studies dean dashboard, signed in as Riegie Tan.",
    problem:
      "The dashboard has to show submission status, faculty, and a pending course item on one screen.",
    approach:
      "The interface groups that work into Dashboard, Faculty, Curricula, Tasks, and Audit Log. The dashboard screenshot is the dean view for Riegie Tan.",
    outcome:
      "The dashboard shows a submissions card (Pending Review, Unaccomplished, Complete), a faculty donut, a pinboard, and a pending submission for IT 105 Networking I. The numbers on screen are the demo state in that capture.",
    shots: [
      shot(
        "coursedock-cms",
        "CourseDock dashboard for the College of Computer Studies, with submission counts, faculty, and a pending IT 105 syllabus.",
      ),
    ],
    files: [],
  },
  {
    slug: "revon-car-rental",
    title: "RevOn Car Rental",
    tag: "System UI",
    category: "systems",
    role: "BSIT student at Pamantasan ng Lungsod ng Pasig. RevOn is a car-rental interface. The two screenshots are My Bookings and the checkout page.",
    problem:
      "A renter has to see an active booking and then a checkout that states the car, the dates, the office, and the charge before payment.",
    approach:
      "Two screens carry that path. My Bookings lists the active reservation. Complete your trip shows the selection, the pick-up checklist, and the price breakdown.",
    outcome:
      "The bookings screen shows an active Lamborghini Urus reservation with pick-up and drop-off in Taguig. The checkout screen shows a Mercedes-Benz GLC, BGC pick-up and drop-off, a hire charge, protection, and a confirm button. Figures on the screens are the values in those captures.",
    shots: [
      shot(
        "revon-1st-pic",
        "RevOn My Bookings: active Lamborghini Urus reservation with Taguig pick-up and drop-off.",
      ),
      shot(
        "revon-2nd-pic",
        "RevOn checkout: Mercedes-Benz GLC selection, pick-up checklist, and car price breakdown.",
      ),
    ],
    files: [],
  },
  {
    slug: "acsis",
    title: "ACSIS",
    tag: "System UI",
    category: "systems",
    role: "BSIT student at Pamantasan ng Lungsod ng Pasig. ACSIS is an exam workspace. The screenshot is the faculty dashboard signed in as Demo Teacher.",
    problem:
      "The faculty home screen has to list classes and exams, including exams that are still drafts.",
    approach:
      "The captured screen is the faculty dashboard: classes, exams, detections, logs, and reports, with a create-exam action.",
    outcome:
      "The dashboard is signed in as Demo Teacher. It lists My Classes, Active Exams, and Total Students, then two draft IT 108 sample exams for BSIT 3E and BSIT 3D. Counts on the cards are the demo state in the screenshot.",
    shots: [
      shot(
        "acsis",
        "ACSIS faculty dashboard with class and exam cards and two draft IT 108 exams.",
      ),
    ],
    files: [],
  },
];

export const credentials = [
  {
    title: "Associate Data Analyst",
    detail: "DataCamp certificate",
    href: "/screenshots/ASSOCIATE%20DATA%20ANALYST.pdf",
    preview: "/screenshots/associate-data-analyst-certificate.png",
    alt: "DataCamp Associate Data Analyst certificate issued to Rex Navarro Jr.",
  },
  {
    title: "SQL Associate",
    detail: "DataCamp certificate",
    href: "/screenshots/SQL%20ASSOCIATE%20CERTIFICATE.pdf",
    preview: "/screenshots/sql-associate-certificate.png",
    alt: "DataCamp SQL Associate certificate issued to Rex Navarro Jr.",
  },
  {
    title: "Python Data Associate",
    detail: "DataCamp certificate",
    href: "/screenshots/PYTHON%20DATA%20ASSOCIATE%20CERTIFICATE.pdf",
    preview: "/screenshots/python-data-associate-certificate.png",
    alt: "DataCamp Python Data Associate certificate issued to Rex Navarro Jr.",
  },
] as const;

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
