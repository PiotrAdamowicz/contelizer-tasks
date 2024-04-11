# Recruitment Task for Contelizer

PL:
Zadanie 1
Napisz program w Vue3, który posiada obsługę formularza do wgrania pliku tekstowego, a następnie przestawi losowo szyk liter w każdym wierszu oprócz pierwszej i ostatniej litery wyrazu. Uwzględnij interpunkcję, wielkie/małe litery, wielolinijkowe teksty, polskie znaki.

Zadanie 2
Napisz program w Vue3 do walidacji numeru PESEL zgodnie z oficjalną specyfikacją formatu. Przygotuj testy jednostkowe sprawdzające kilka danych nieprawidłowych i przynajmniej jeden poprawny numer PESEL. [Specifikacja](https://www.gov.pl/web/gov/czym-jest-numer-pesel)

Zadanie 3
Napisz w Vue3 obsługę API dostępnego pod adresem https://gorest.co.in/. Aplikacja powinna posiadać widok listy użytkowników (pobranych z API) oraz mieć możliwość ich wyszukiwania i edycji istniejących wpisów.

ENG:

Task 1
Write program in Vue3 with form taking text file and then randomly change letter order in every row excluding first and last letter of a word. Take in consideration
punctuations, capital/lower case letters, multiline texts, polish sings.

Task 2
Write program in Vue3 to validate PESEL number according to official specification. Write unit test for invalid and valid numbers (at least one valid).
[Specs](https://www.gov.pl/web/gov/czym-jest-numer-pesel)

Task 3
Write Vue3 app fetching API data from https://gorest.co.in/. App should have user list view (from API) and options for searching and editing users.

## Solution

Task 1 - since it was not specified I've shown solution on the page with file input comparing original to jumbled text.

Task 2 - it checks if pesel is in required length and checks correctness of control number by the specification.

Task 3 - since it was not specified I did not persist changes made to User list by user (with given API there's no option of making actual POST requests). Also I did not implement form for gender to be a select form (you can put in a cat or whatever you wish).
