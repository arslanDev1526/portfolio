import React, { useEffect, useState } from "react";
import ArslanCV from "../assets/arslan_younas.pdf";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const [isDarkmode, setIsDarkmode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkmode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }

    const savedMode = localStorage.getItem("color-theme");
    if (
      savedMode === "dark" ||
      (!savedMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  };

  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Arslan{" "}
            </span>
          </a>

          <button
            onClick={toggleNav}
            aria-expanded={isNavOpen}
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
          >
            {/* <span class="sr-only">Open main menu</span> */}
            <svg
              class={`w-5 h-5 ${isNavOpen ? "hidden" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <svg
              className={`w-5 h-5 ${isNavOpen ? "" : "hidden"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.5 3.5l7 7m0-7l-7 7"
              />
            </svg>
          </button>

          <div
            class={` ${
              isNavOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <button
              id="theme-toggle"
              type="button"
              className="border-black text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              onClick={toggleDarkMode}
            >
              <svg
                id="theme-toggle-dark-icon"
                className={`w-5 h-5 ${darkMode ? "" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className={`w-5 h-5 ${darkMode ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full px-16 mx-auto flex justify-between py-7 border-b border-red-700 dark:bg-red-900">
        <div className="flex">
          <div>{/* <img src="" alt="img" /> */}</div>
          <div>ARSLAN</div>
        </div>

        <div className="w-6/12">
          <ul className="flex justify-between">
            <a
              className="relative w-fit block after:mb-2 after:block after:content-[''] after:absolute after:top-8 after:h-[4px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left"
              href="#"
            >
              Home
            </a>
            <a
              className="relative w-fit block after:mb-2 after:block after:content-[''] after:absolute after:top-8 after:h-[4px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left"
              href="#"
            >
              Skills
            </a>
            <a
              className="relative w-fit block after:mb-2 after:block after:content-[''] after:absolute after:top-8 after:h-[4px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left"
              href="#"
            >
              Work
            </a>
            <a
              className="relative w-fit block after:mb-2 after:block after:content-[''] after:absolute after:top-8 after:h-[4px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left"
              href="#"
            >
              About
            </a>
            <a
              className="relative w-fit block after:mb-2 after:block after:content-[''] after:absolute after:top-8 after:h-[4px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left"
              href="#"
            >
              contact
            </a>
          </ul>
        </div>

        <div>
          <button
            id="theme-toggle"
            type="button"
            className="border-black text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={toggleDarkMode}
          >
            <svg
              id="theme-toggle-dark-icon"
              className={`w-5 h-5 ${darkMode ? "" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className={`w-5 h-5 ${darkMode ? "hidden" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* mockup mobile */}

      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem]  overflow-y-auto w-[272px] h-[572px] bg-white dark:bg-gray-800 scrollbar-none">
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            assumenda repudiandae. Accusamus tempore adipisci, explicabo
            quisquam veritatis quia velit, facilis deleniti, amet unde sit
            accusantium nihil neque quod maiores incidunt? Quos aut
            reprehenderit debitis fuga ratione non! Id officiis hic blanditiis
            natus corrupti quidem excepturi nostrum sunt sint, molestiae
            numquam. Consectetur similique voluptate pariatur quas quam veniam
            iusto nisi in non! Quam asperiores molestiae aliquid tempore
            mollitia voluptatum atque veniam maxime nobis inventore suscipit nam
            quos vitae optio modi laudantium fugit unde ea placeat illo, nulla
            incidunt tenetur amet? Placeat sit minima fugit doloribus, numquam
            quos laborum ducimus maiores commodi iure ut mollitia illo deserunt
            rerum voluptatem quis, voluptas maxime nemo possimus incidunt
            tempora molestias natus? Animi expedita aperiam maiores nesciunt
            ratione! Ad atque distinctio incidunt maiores, velit enim architecto
            tenetur perspiciatis? Quibusdam ex rem, odit dolor quisquam dolorum
            sunt vitae dicta? Ullam consequatur fugiat tenetur, sapiente non
            libero magni et doloremque maiores voluptate debitis suscipit
            tempora reiciendis repellendus dolor earum tempore esse
            reprehenderit cumque. Sunt repudiandae dolor quis laboriosam
            similique illum porro deserunt at quia quasi accusantium minima
            fugit architecto consectetur maiores perspiciatis nihil, sed optio
            saepe dolorem aperiam exercitationem molestiae voluptatum. Assumenda
            cumque error, beatae voluptatem veniam deserunt dolorem, quibusdam
            suscipit reprehenderit fugiat accusantium doloremque quasi facilis
            soluta eligendi voluptas libero, iure reiciendis? Atque quidem neque
            sint velit, necessitatibus dolorum nostrum esse ipsam, animi beatae
            numquam quasi fugit rem assumenda quam sequi repellat possimus
            fugiat blanditiis debitis? Officia ducimus perferendis dolore quia
            enim nemo eligendi minima repudiandae non! Distinctio, omnis fugiat!
            Enim facilis culpa nisi voluptatum quae magnam excepturi harum
            consequatur debitis odit. Consequatur voluptates adipisci
            consectetur blanditiis numquam rem odit inventore quidem cum facere
            nesciunt, sed, aut dolore, quisquam necessitatibus. Quo aut veniam
            unde aliquam quod molestias ea, facilis culpa ipsa doloribus error
            rem voluptatem excepturi repellat architecto totam fuga dolorum
            dolorem, esse nam voluptates consequuntur. Eaque quae voluptatum
            consectetur voluptate. Suscipit explicabo neque, necessitatibus
            aperiam pariatur inventore ut quo totam possimus expedita doloribus
            sunt sequi labore aut quam similique quia soluta modi repudiandae
            iste adipisci provident quis! Numquam possimus natus a minima, non
            maiores optio quidem reprehenderit nostrum ab ea ullam. Id
            accusantium provident odit, quam explicabo tenetur vitae quaerat
            mollitia pariatur omnis sint quae totam accusamus beatae repudiandae
            neque incidunt culpa sit? Eveniet expedita sapiente obcaecati, illum
            quod ullam facere vero libero tempore exercitationem enim, illo ex
            incidunt debitis. Exercitationem, a sequi ipsa repellat deserunt,
            facilis atque quae vero officiis vitae dolores magnam? Recusandae
            tempora necessitatibus harum fugiat beatae voluptatum pariatur et
            vel? Eveniet dolore consectetur sapiente nisi assumenda fugit
            deserunt corporis commodi nam alias obcaecati corrupti repudiandae
            praesentium, odit velit ex hic vitae suscipit. Reprehenderit,
            molestiae atque ipsam nesciunt aperiam recusandae veritatis harum
            quasi nemo totam ab porro sit autem. Perspiciatis commodi sunt
            praesentium quod facilis repellat eligendi, molestiae vero optio
            deserunt cupiditate a sequi provident totam quas voluptatem
            perferendis dolor! Magnam error ea eveniet modi tempore! Vitae minus
            sit tenetur ullam excepturi voluptatibus repudiandae quas aut
            perferendis soluta neque fugiat assumenda accusantium impedit id,
            error cum natus dolorum ipsum iure, voluptas laudantium. Natus
            exercitationem tempore quia alias. Nobis veniam ratione dolorum
            saepe hic commodi, labore ipsum delectus cum tempore explicabo
            voluptate nostrum pariatur aperiam libero eaque et neque nesciunt
            consequatur ex, vitae, perferendis molestias! Et quas facere
            architecto sit iure nobis eius qui dolores ipsum? Vero harum enim
            iste rem molestias sint cum quis, quam, fugit vitae natus quia atque
            mollitia libero repellendus fuga reiciendis, similique amet? Totam
            similique deleniti distinctio soluta minima aperiam impedit saepe,
            ut quidem, labore nihil tempora, error quod nobis expedita
            architecto accusantium rerum consequatur et beatae provident nisi
            nam delectus deserunt! Repellat ex temporibus sunt, suscipit earum
            magnam quod optio qui dolorum perspiciatis odio? Alias aperiam
            explicabo fugit! Sequi voluptas ullam, nemo officiis, ipsam impedit
            fugit id quam omnis beatae, facere eveniet doloremque cupiditate
            quod iure assumenda labore incidunt ratione culpa! Pariatur quam
            unde repellendus odit laboriosam sapiente facilis magni blanditiis
            vero impedit repudiandae maiores, cupiditate ab tempora. Maiores
            facilis aliquam odio ipsum reprehenderit dolores, consequuntur alias
            aut officiis eum! Velit praesentium, non earum fugiat perferendis
            repudiandae quia. Delectus cupiditate, adipisci consequatur et
            consectetur quas ex qui odit quidem molestias dolorum cumque optio
            atque, ut odio. Reprehenderit molestias exercitationem quibusdam
            cumque consequuntur inventore cum qui suscipit sequi, omnis nemo,
            explicabo modi aut, officiis odio. Dolorum culpa blanditiis
            necessitatibus distinctio dicta, nesciunt voluptas temporibus
            doloribus ad beatae, aliquid illum et quis cum minima, unde quasi id
            aliquam optio. Esse cupiditate tempora quidem officiis blanditiis et
            dolore repellat distinctio, optio aliquid cum dolorum placeat
            aperiam reprehenderit neque harum sed, adipisci fugit quam quod,
            pariatur fugiat. Sit iste distinctio quae officiis illo, dicta quis?
            Repellat tempora at quibusdam iste error iusto id dicta nisi
            voluptas iure debitis, ex et eveniet rerum aut dolores libero
            nostrum? Natus beatae perferendis saepe, obcaecati impedit vel nobis
            provident facere explicabo, sint quam ullam. Obcaecati sint delectus
            maxime iure rem. Magni dolorem quasi unde commodi sunt, vel ratione
            consequuntur! Eligendi, pariatur error alias, soluta quo quos qui
            cumque commodi excepturi iure, temporibus dolore nemo laborum. Rerum
            possimus cumque earum rem nihil ducimus ea ab vitae modi dolores hic
            libero nam ipsum voluptatem ipsam omnis repellat doloribus expedita
            numquam ad tempora, nesciunt repellendus reprehenderit. Quo optio
            accusantium dolorem at. Tempore impedit error iste sapiente
            exercitationem maxime atque reiciendis rem laudantium asperiores
            vitae voluptates saepe ab sint, labore odit ullam quas accusamus
            possimus deserunt culpa! Cum quibusdam, eos, repellat consectetur
            amet sequi, veniam reiciendis consequuntur inventore eaque ad
            dolorem fugit deserunt ipsum exercitationem. Soluta expedita
            inventore, magnam explicabo fuga sint vero esse! Quae perferendis
            omnis quaerat at eius aspernatur molestiae, reiciendis architecto
            facere dicta maxime fuga culpa aut aperiam eos voluptate officiis
            tenetur. Culpa laboriosam error, sunt repellat non possimus, quia
            mollitia quod neque quos sapiente rem provident asperiores. Aliquam
            amet quam fugit magni autem nesciunt atque odio quas aut! Nostrum
            obcaecati enim voluptate a tempora facilis. Quasi dolor voluptatum
            dolorum sunt asperiores quidem numquam harum quibusdam similique
            sapiente consectetur alias accusantium doloribus, maiores ad nihil
            tempora molestias.
          </p>
        </div>
      </div>

      {/* download button  */}

      <a href={ArslanCV}
         download="Arslan CV"  target="_blank" >
       <button> Download the cv </button>
      </a>

      {/* card */}


     

      <div class="w-full max-w-80 border border-red-600 mx-auto my-5 p-4">
        <div className="flex justify-center flex-col items-center">
          <img src="" alt="logo" />
          <h1>HTML</h1>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            porro molestias tempore, incidunt quam consectetur. Impedit libero
            molestiae ab aliquid! Consequuntur soluta nobis, voluptatem in
            tempora architecto. 
          </p>
          <div className="w-full gap-3 flex flex-col items-center justify-between"> 
          <div className="w-2/3 px-2 flex justify-between"> 
            <p>Skill</p>
            <h2>92%</h2>
          </div>
          <div className="w-[200px] h-[10px] rounded-lg border border-black"> 
            <div className="w-[170px] h-[9px] bg-red-700 rounded-lg"> 
            </div>
          </div>
          <div className="w-2/3 px-2 flex justify-between"> 
            <p>Skill</p>
            <h2>92%</h2>
          </div>
          <div className="w-[200px] h-[10px] rounded-lg border border-black"> 
            <div className="w-[170px] h-[9px] bg-red-700 rounded-lg"> 
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
