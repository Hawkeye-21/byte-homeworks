const formConfig = [
    {
      element: "text",
      name: "login",
      label: "Логин",
    },
    {
      element: "text",
      name: "age",
      label: "Возраст",
    },
    {
      element: "select",
      name: "language",
      label: "Выберите язык программирования",
      options: [
        {
          text: "JavaScript",
          value: "js",
        },
        {
          text: "Java",
          value: "java",
        },
        {
          text: "Python",
          value: "python",
        },
      ],
    },
  ];
console.log(formConfig);
  //Функция, создающая поля из конфига
const createFields = (config) => {
    return config.map((fieldConfig) => {
        const wrapper = document.createElement("div");
        const label = document.createElement("label");
        label.setAttribute("for", fieldConfig.name);
        label.innerText = fieldConfig.label;
        console.log(label);

        let element;

        switch (fieldConfig.element) {
            case "text":
                element = document.createElement("input");
                element.setAttribute("typr", "text");

                element.setAttribute("id", fieldConfig.name);
                element.setAttribute("name", fieldConfig.name);

                break;
            
            case "select":
                element = document.createElement("select");
                //для select пробегаемся по массиву options для того
                //чтобы создать варианты выбора  select
                //аппендим получившиеся опшины в select
                fieldConfig.options.forEach((opt) => {
                    const option = document.createElement("option");
                    option.innerText = opt.text;
                    option.setAttribute("value", opt.value);

                    element.append(option);
                });

                element.setAttribute("id", fieldConfig.name);
                element.setAttribute("name", fieldConfig.name);

                break;
            default:
                //на всякий случай можно обработать ошибку
                console.log("Unhandled input type", fieldConfig.element);
        }

        //после свитча аппендим лейбл и получившийся елемент в div-обертку
        wrapper.append(label, element);

        //возвращаем div-обертку
        return wrapper;
    });
};

//Функция из классной работы, превращает форм дату в объект
const convertFormDataToObject = (formData) => {
    const data = {};
    for (const pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }

    return data;
};

//обработчик сабмита, не забываем про preventDefault
const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const data = convertFormDataToObject(formData);

    console.log(data);
};

//создаем елемент формы
const form = document.createElement("form");
//получаем массив єлементов с полями
const fields = createFields(formConfig);
console.log(fields);

//циклом пробегаем по полям и добавляем каждое в форму
fields.forEach((item) => {
    form.append(item);
});

//добавляем кнопку в форму
const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "Подтвердить";
form.append(submitBtn);

//добавляем форму на страницу
document.body.append(form);

//вешаем обработчик
form.addEventListener("submit", handleSubmit);