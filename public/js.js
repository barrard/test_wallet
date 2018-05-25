if (!localStorage.getItem('seed')) {
  // document.getElementById('one_time_new_account').style.display = 'block'
}else{
  document.getElementById('one_time_new_account').innerHTML = 'Welcome'
  setSeedFromLS()

}

