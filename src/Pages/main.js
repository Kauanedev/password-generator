import './style.css';

export default function Main() {


  function generatePassword() {
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

    let passsword = ''
    let lenght = lenghtEl.value
    let chars = ''

    chars += lowercaseEl.checked ? lowercaseChars : ''
    chars += uppercaseEl.checked ? uppercaseChars : ''
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
          <input type="text" id="password" readOnly placeholder="Generate a password" />
          <button
            className="material-icons"
            id="copy"
            onClick={() => {
              const password = document.querySelector("#password");
              password.select();
              document.execCommand("copy");
            }}
          >content_copy</button>
        </label>

        <label>
          <span>Password Lenght: </span>
          <input type="number" id="lenght" min="5" max="50" defaultValue="16" />
        </label>
        <label>
          <span>Include Lowercase Letters: </span>
          <input type="checkbox" id="lowercase" defaultChecked />
        </label>
        <label>
          <span>Include Upperercase Letters: </span>
          <input type="checkbox" id="uppercase" defaultChecked />
        </label>
        <label>
          <span>Include Numbers: </span>
          <input type="checkbox" id="numbers" defaultChecked />
        </label>
        <label>
          <span>Include Symbols: </span>
          <input type="checkbox" id="symbols" defaultChecked />
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

