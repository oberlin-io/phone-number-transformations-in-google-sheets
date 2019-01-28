# phone-number-transformations-in-google-sheets
Phone number transformations in Google Sheets

Open the .JS file. The Sheets formulas are easier to read in JS syntax hilighting.

I'd like to update this with a more robust method. Instead of RegEx matching each possible format, simply grab the last four digits of the string, the next to last three digits, and the three digits before that -- regardless of the characters in between.
