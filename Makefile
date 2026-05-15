TEX = xelatex
SRC = cv.tex
IMG = philipp-schroer-portrait.png
PDF_DIR = pdf
PUBLIC_PDF_NAME = philipp-schroer-cv
CONTACT_PDF_NAME = philipp-schroer-cv-contact
PDF = $(PDF_DIR)/$(PUBLIC_PDF_NAME).pdf
CONTACT_PDF = $(PDF_DIR)/$(CONTACT_PDF_NAME).pdf
SITE_PDF_DIR = site/public/files
TEXFLAGS = -interaction=nonstopmode -halt-on-error -output-directory=$(PDF_DIR)
PUBLIC_TEXFLAGS = $(TEXFLAGS) -jobname=$(PUBLIC_PDF_NAME)
CONTACT_TEXFLAGS = $(TEXFLAGS) -jobname=$(CONTACT_PDF_NAME)

.PHONY: all clean site site-serve cv-public cv-contact sync-pdf FORCE

all: cv-public

$(PDF_DIR): ; mkdir -p $(PDF_DIR)

$(PDF): FORCE $(SRC) $(IMG) | $(PDF_DIR) ; $(TEX) $(PUBLIC_TEXFLAGS) $(SRC) && $(TEX) $(PUBLIC_TEXFLAGS) $(SRC)

cv-public: $(PDF)

cv-contact: $(SRC) $(IMG) | $(PDF_DIR) ; test -f cv-contact.tex || { echo "Copy cv-contact.example.tex to cv-contact.tex and fill in the extra contact details."; exit 1; }; $(TEX) $(CONTACT_TEXFLAGS) "\def\CVContactBuild{1}\input{$(SRC)}" && $(TEX) $(CONTACT_TEXFLAGS) "\def\CVContactBuild{1}\input{$(SRC)}"

sync-pdf: cv-public ; mkdir -p $(SITE_PDF_DIR) && cp $(PDF) $(SITE_PDF_DIR)/$(PUBLIC_PDF_NAME).pdf

clean: ; rm -f *.aux *.log *.out *.fls *.fdb_latexmk *.synctex.gz *.xdv $(PDF_DIR)/*.aux $(PDF_DIR)/*.log $(PDF_DIR)/*.out $(PDF_DIR)/*.fls $(PDF_DIR)/*.fdb_latexmk $(PDF_DIR)/*.synctex.gz $(PDF_DIR)/*.xdv

site: sync-pdf ; cd site && pnpm run build

site-serve: ; cd site && pnpm run dev
