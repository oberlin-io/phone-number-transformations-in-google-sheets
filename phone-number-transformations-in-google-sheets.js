// Google Sheets formulas
// (they look nice in JS syntax hilighting)
// These can be combined with conditions to sweep an entire column of numbers

// Check format is "555-555-5555"
IF(
   REGEXMATCH(TO_TEXT(A1), "^\d{3}-\d{3}-\d{4}$"
   ),
   A1,
   "FIX"
)

// Transform "5555555555" to "555-555-5555"
CONCATENATE(
   REGEXEXTRACT(TO_TEXT(A1), "(^\d{3})\d{3}\d{4}$"),
   "-",
   REGEXEXTRACT(TO_TEXT(A1), "^\d{3}(\d{3})\d{4}$"),
   "-",
   REGEXEXTRACT(TO_TEXT(A1), "^\d{3}\d{3}(\d{4}$)")
)

// Transform "(555) 555-5555" to "555-555-5555"
CONCATENATE(
   REGEXEXTRACT(B11, "^\((\d{3})\) \d{3}-\d{4}$"),
   "-",
   REGEXEXTRACT(B11, "^\(\d{3}\) (\d{3})-\d{4}$"),
   "-",
   REGEXEXTRACT(B11, "^\(\d{3}\) \d{3}-(\d{4}$)")
)