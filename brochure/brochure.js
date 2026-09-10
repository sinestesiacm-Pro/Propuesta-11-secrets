// 11 Secrets de Beauté — Brochure Studio Script

function switchBrochure(type) {
  const coiffureDoc = document.getElementById('brochure-coiffure');
  const esthetiqueDoc = document.getElementById('brochure-esthetique');
  const btnCoiffure = document.getElementById('btn-coiffure');
  const btnEsthetique = document.getElementById('btn-esthetique');

  if (type === 'coiffure') {
    coiffureDoc.classList.add('active');
    esthetiqueDoc.classList.remove('active');
    btnCoiffure.classList.add('active');
    btnEsthetique.classList.remove('active');
  } else {
    coiffureDoc.classList.remove('active');
    esthetiqueDoc.classList.add('active');
    btnCoiffure.classList.remove('active');
    btnEsthetique.classList.add('active');
  }
}

function setViewMode(mode) {
  const btnAll = document.getElementById('btn-all-faces');
  const btnExt = document.getElementById('btn-ext');
  const btnInt = document.getElementById('btn-int');

  [btnAll, btnExt, btnInt].forEach(btn => btn.classList.remove('active'));

  const extSheets = document.querySelectorAll('.sheet-exterior');
  const intSheets = document.querySelectorAll('.sheet-interior');

  if (mode === 'all') {
    btnAll.classList.add('active');
    extSheets.forEach(s => s.style.display = 'block');
    intSheets.forEach(s => s.style.display = 'block');
  } else if (mode === 'ext') {
    btnExt.classList.add('active');
    extSheets.forEach(s => s.style.display = 'block');
    intSheets.forEach(s => s.style.display = 'none');
  } else if (mode === 'int') {
    btnInt.classList.add('active');
    extSheets.forEach(s => s.style.display = 'none');
    intSheets.forEach(s => s.style.display = 'block');
  }
}

function toggleGuides(show) {
  if (show) {
    document.body.classList.remove('body-hide-guides');
  } else {
    document.body.classList.add('body-hide-guides');
  }
}

// Auto-scale sheets to fit the window on desktop/laptop
function autoScaleCanvas() {
  const sheets = document.querySelectorAll('.brochure-sheet');
  const availableWidth = window.innerWidth - 60;
  
  // 297mm ≈ 1122.5px at 96 DPI screen
  const naturalWidthPx = 1122.5;

  if (availableWidth < naturalWidthPx) {
    const scale = availableWidth / naturalWidthPx;
    sheets.forEach(sheet => {
      sheet.style.transform = `scale(${scale})`;
      sheet.style.transformOrigin = 'top center';
      sheet.parentElement.style.minHeight = `${sheet.offsetHeight * scale}px`;
    });
  } else {
    sheets.forEach(sheet => {
      sheet.style.transform = 'none';
    });
  }
}

window.addEventListener('resize', autoScaleCanvas);
window.addEventListener('DOMContentLoaded', () => {
  autoScaleCanvas();
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const view = params.get('view');
  if (type) switchBrochure(type);
  if (view) setViewMode(view);
});
