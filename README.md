## Netomi Iframe Form

![Homepage](https://i.imgur.com/ZXnVgXl.png)

## Functionality

✅ Form is loaded in the iframe.\
✅ The form has fields like Name, Email address, DOB, Contact number, Country and State.\
✅ Users can see countries list in a drop down menu.(Countries list is pre-populated via an API call.)\
✅ If a country is selected, only the states of the selected country will be populated in the state dropdown menu.\
✅ Added these validations in the form fields:

- Name: Length should be between 4-10 characters.
- Email address: should only support valid email address
- Contact number: mobile number should be of 10 digits.
- Country, State, Name are mandatory fields.

✅ If all fields are valid, show the success message “All fields are valid” on the parent window or the error message.

## 👨‍💻 Demo

<a href="https://github.com/rishipurwar1/iframe-form" target="blank">
<img src="https://img.shields.io/website?url=https://iframe-form.vercel.app/&logo=github&style=flat-square" />
</a>

Try out the website : [Netomi Iframe Form](https://iframe-form.vercel.app/)

## 👨‍🔧 Tech Stack

![ReactJs](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

## 🛠️ Installation Steps

1. Fork [this](https://github.com/rishipurwar1/iframe-form) repository.
2. Clone your forked copy of the project.
3. Create a `.env` file at the root of the project folder and add the following environment variables:

```
REACT_APP_COUNTRY_API_URL=https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json
```

4. Install dependencies using `npm install` command.
5. Run the app using `npm start` command.
