// dropDownMenu
document.addEventListener('click', e => {
  const isDropDownBtn = e.target.matches('[data-dropdown-button]')
  if (!isDropDownBtn && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown
  if (isDropDownBtn) {
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return
    console.log("remove")
    dropdown.classList.remove('active')
  })
})