import Title from "./Title";

type Props = {
  lang: string;
};

const Contact = ({ lang }: Props) => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center mx-2">
        <form action="https://getform.io/f/bcee686e-a012-41f2-834e-ceb69cb49005" method="POST" className="flex flex-col w-full md:w-7/12">
          <Title id="">{lang === "ENG" ? "Contact" : "Контакт"}</Title>
          <input
            type="text"
            name="name"
            placeholder={lang === "ENG" ? "Name" : "Имя"}
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input type="text" name="email" placeholder="Email" className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
          <textarea
            name="message"
            placeholder={lang === "ENG" ? "Message" : "Сообщение"}
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-red-500 drop-shadow-md"
            >
              {lang === "ENG" ? "Text me" : "Написать мне"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
