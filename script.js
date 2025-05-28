import {createElement} from "./components.js"
import {DATA,COLORS} from "./consts.js"
const btnnew= document.querySelector("#buttonnew")
const btnmessage= document.querySelector("#buttonmessage")
const btnarchive= document.querySelector("#buttonarchive")
const btngroupe= document.querySelector("#buttongroupe")
const btndiffusion= document.querySelector("#buttondiffusion")

const nouveauContact = (() => {
  const loadPreview = (event) => {
    const file = event.target.files[0];
    const preview = document.getElementById('photo-preview');
    const cameraIcon = event.target.parentElement.querySelector('.fa-camera');
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
        preview.classList.remove('hidden');
        cameraIcon.classList.add('hidden');
      };
      reader.readAsDataURL(file);
    }
  };

  const container = document.createElement('div');
  container.className = 'w-[300px] p-[15px] border-r flex flex-col bg-white';

  const title = document.createElement('h3');
  title.className = 'text-[18px] font-semibold text-black m-0';
  title.textContent = 'Nouveau contact';

  const contentArea = document.createElement('div');
  contentArea.className = 'flex-grow px-[20px] pt-[25px] pb-[20px] flex flex-col gap-[25px] overflow-y-auto';

  const photoSection = document.createElement('div');
  photoSection.className = 'flex flex-col items-center gap-[10px]';

  const photoLabel = document.createElement('label');
  photoLabel.htmlFor = 'photo-upload';
  photoLabel.className = 'cursor-pointer relative';

  const photoContainer = document.createElement('div');
  photoContainer.className = 'w-[80px] h-[80px] rounded-full bg-zinc-300 overflow-hidden flex items-center justify-center';

  const photoPreview = document.createElement('img');
  photoPreview.id = 'photo-preview';
  photoPreview.src = 'https://via.placeholder.com/80x80.png?text=+';
  photoPreview.alt = 'Photo';
  photoPreview.className = 'object-cover w-full h-full hidden';

  const cameraIcon = document.createElement('i');
  cameraIcon.className = 'fa-solid fa-camera text-gray-600 text-[20px] absolute';

  const photoInput = document.createElement('input');
  photoInput.type = 'file';
  photoInput.id = 'photo-upload';
  photoInput.accept = 'image/*';
  photoInput.className = 'hidden';
  photoInput.onchange = loadPreview;

  const photoText = document.createElement('span');
  photoText.className = 'text-sm text-gray-500';
  photoText.textContent = 'Ajouter une photo';

  photoContainer.appendChild(photoPreview);
  photoContainer.appendChild(cameraIcon);
  photoLabel.appendChild(photoContainer);
  photoLabel.appendChild(photoInput);
  photoSection.appendChild(photoLabel);
  photoSection.appendChild(photoText);

  const nameField = document.createElement('div');
  nameField.className = 'flex items-center gap-[10px] border-b border-gray-300 py-[5px]';

  const nameIcon = document.createElement('i');
  nameIcon.className = 'fa-solid fa-user text-[#0a0a0a] text-[16px] w-[20px] text-center';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Nom';
  nameInput.className = 'flex-grow outline-none text-[14px]';

  nameField.appendChild(nameIcon);
  nameField.appendChild(nameInput);

  const phoneField = document.createElement('div');
  phoneField.className = 'flex items-center gap-[10px] border-b border-gray-300 py-[5px]';

  const phoneIcon = document.createElement('i');
  phoneIcon.className = 'fa-solid fa-phone text-[#0f0f10] text-[16px] w-[20px] text-center';

  const phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.placeholder = 'Téléphone';
  phoneInput.className = 'flex-grow outline-none text-[14px]';

  phoneField.appendChild(phoneIcon);
  phoneField.appendChild(phoneInput);

  contentArea.appendChild(photoSection);
  contentArea.appendChild(nameField);
  contentArea.appendChild(phoneField);

  const saveButton = document.createElement('button');
  saveButton.className = 'w-full text-[#2d2d2d] p-[15px] rounded-[25px] text-[16px] bg-[#d6d1d1] font-semibold cursor-pointer transition-all duration-300 hover:bg-[#aca9a9]';
  saveButton.textContent = 'Enregistrer';

  container.appendChild(title);
  container.appendChild(contentArea);
  container.appendChild(saveButton);

  return container;
})();

// const age = 10
// const square = createElement('div', {
//     style:{
//         backgroundColor:COLORS.deleted,
//         width: '100px',
//         height: '100px'
//     },
//     vIf: age>18,
// })


// // const users = ["Fatou", "Penda", "Aida","test"];
// // const myUl2 = createElement('ul', {
// //     vFor: {
// //         each: ["1","2","54,5,5"],
// //         render: name => createElement('h1', {}, name)
// //     }
// // });

// // v-if
// const box = createElement('div', {
//     class: 'card',
//     vIf: false
// }, "Ceci est visible grâce à v-if");


// // v-for
// const list = createElement('ul', {
//     vFor: {
//         each: ['JavaScript', 'Vue.js', 'React', 'Svelte'],
//         render: tech => createElement('li', {}, tech)
//     }
// });
// //
// const productList = createElement('div', {
//     style: { border: '1px solid red', class: 'card-container' },
//     vFor: {
//         each: DATA,
//         render: (item) => {
//             const color = item.done && item.deleted ? COLORS.done_deleted : item.done ? COLORS.done : item.deleted ? COLORS.deleted : COLORS.other
//             return createElement('div', {
//                 class: 'card',
//                 style: `background-color: ${color}`
//             }, [
//                 createElement('h2', {}, item.title),
//                 createElement('p', {}, item.content),
//                 createElement('small', {}, item.pts)
//              ])
//         }
//     }
// });
// // v-show
// const toggled = createElement('div', {
//     class: 'card',
//     vShow: true,
//     id: 'toggleBox'
// }, "Ceci est masqué par v-show");

// // :style et événements
// const button = createElement('button', {
//     class: 'btn',
//     id: 'toggleBtn',
//     style: 'margin-top: 10px',
//     onClick: () => {
//         console.log(toggled)
//         // const box = document.getElementById('toggleBox');
//         toggled.style.display = toggled.style.display === 'none' ? '' : 'none';
//     }
// }, ["Afficher / Masquer le bloc",createElement('span',{},'test')]);


// // const userLi = users.map((name) => createElement('li', {}, name))

// // const myUl = createElement('ul', {},userLi)

// const noms = ['aly', 'tall', 'toto', 'titi'];
// const myDiv = createElement('div', {
//     style: {display: 'flex', flexDirection: 'column', gap: '10px'},
//     vFor:{
        
//         // each: Array.from('i'.repeat(100)) , 'i'.repeat(100) = 'iiiiii'
//         // Array.from('text') = ['t', 'e', 'x', 't']
//        each: Array.from({length:10}),
//         // each: [...Array(100).keys()],
//         // render: el => createElement('p', {}, el)
//         render: _ => createElement('p', {}, "el")

//     }
// });

// const app = createElement(
//     'div', 
//     {
//         id:"app",
//         style: { border: '1px solid black', padding: '50px' },
//     },
//     [
//         toggled,
//         myDiv,
//         square,
//         productList,
//         button,
//     ]
// );















// // Construction finale
// // const app = createElement('div', {}, [
// //     createElement('h1', {
// //         style: { color: 'teal' }
// //     }, "Mini Framework DOM (Vanilla JS)"),

// //     box,
// //     toggled,
// //     productList,
// //     createElement('div', { class: 'card' }, [
// //         createElement('h3', {}, 'Liste avec v-for:'),
// //         list
// //     ]),
// //     button
// // ]);
// // app.addNode(myDiv);
document.body.append(app);