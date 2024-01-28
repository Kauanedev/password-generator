import './style.css';

export default function Main() {
  const passwordEl = document.querySelector('#password')
  const lenghtEl = document.querySelector('#lenght')
  const uppercaseEl = document.querySelector('#uppercase')
  const lowercaseEl = document.querySelector('#lowercase')
  const numbersEl = document.querySelector('#numbers')
  const symbolsEl = document.querySelector('#symbols')

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const numberChars = '0123456789'
  const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>/?'

  function generatePassword() {
    let passsword = ''
    let lenght = lenghtEl.value
    let chars = ''

    chars += uppercaseEl.checked ? uppercaseChars : ''
    chars += lowercaseEl.checked ? lowercaseChars : ''
    chars += numbersEl.checked ? numberChars : ''
    chars += symbolsEl.checked ? symbolChars : ''

    for (let i = 0; i <= lenght; i++) {
      let random = Math.floor(Math.random() * chars.length)
      passsword += chars.substring(random, random + 1)
    }

    passwordEl.value = passsword
    return passsword
  }


  return (
    <div className="container-main">
      <div className="container">
        <h2>Password Generator</h2>

        <label className="password-wrap">
          <input type="text" id="password" readonly placeholder="Generate a password" />
          <button class="material-icons" id="copy">content_copy</button>
        </label>

        <label>
          <span>Password Lenght: </span>
          <input type="number" id="lenght" min="5" max="50" value="16" />
        </label>
        <label>
          <span>Include Lowercase Letters: </span>
          <input type="checkbox" id="lowercase" checked />
        </label>
        <label>
          <span>Include Upperercase Letters: </span>
          <input type="checkbox" id="uppercase" checked />
        </label>
        <label>
          <span>Include Numbers: </span>
          <input type="checkbox" id="numbers" checked />
        </label>
        <label>
          <span>Include Symbols: </span>
          <input type="checkbox" id="symbols" checked />
        </label>

        <button
          type="submit"
          id="generate"
          onClick={() => {generatePassword()}}
        >Generate Pasword</button>


      </div>



    </div>
  );
}

