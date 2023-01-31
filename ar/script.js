// window.onload = () => {
//     const backButton = document.querySelector("[name='backButton']");
//     backButton.innerText = "<";
//     const forwardButton = document.querySelector("[name='forwardButton']");
//     forwardButton.innerText = ">";
    
//     renderPlaces();
//   };
  
  
//   var models = [
//     {
//       // LMU
//       obj_model: ["obj: url(assets/man.obj)"],
//       values: ["hello", "new text hear"],
//       alt: "",
//       scale: "5 5 5",
//       look_at: "[gps-camera]",
//       lat: 48.1302400,
//       lng: 11.5643753,
//     },
  
//     {
//       // Max Sax
//       obj_model: ["obj: url(assets/woman-kid.obj)"],
//       values: ["hello", "new text hear"],
//       alt: "",
//       look_at: "[gps-camera]",
//       scale: "1 1 1",
//       lat: 48.1449890,
//       lng:  11.5809730,
//     },

//        // hm
//     {
//       obj_model: ["obj: url(assets/woman.obj)"],
//       values: ["hello", "new text hear"],
//       alt: "",
//       scale: "5 5 5",
//       look_at: "[gps-camera]",
//       lat: 48.1968569,
//       lng: 11.4611707,
//     },
//   ];
  
//   var modelIndex = 0;
//   var setModel = function (model, entity, index) {
//       entity.setAttribute("obj-model", model.obj_model[index]);
  
//     /*
//     if (model.look_at) {
//       entity.setAttribute("look-at", model.look_at);
//     }
//     if (model.scale) {
//       let scale_attr = document.createAttribute("scale");
//       scale_attr.value = model.scale;
//       entity.setAttributeNode(scale_attr);
//     }
//     */
//   };
  
//   function renderPlaces() {
//     let scene = document.querySelector("a-scene");
  
//     models.forEach((model) => {
//       let latitude = model.lat;
//       let longitude = model.lng;
  
//       let entity = document.createElement('a-entity');
     
//       let gps_attr = document.createAttribute("gps-entity-place");
//       gps_attr.value = `latitude: ${latitude}; longitude: ${longitude};`
//       entity.setAttributeNode(gps_attr);
      
//       setModel(model, entity, modelIndex);
      
//       scene.appendChild(entity);
      
//     });
    
//       models.forEach((model) => {
//       document
//         .querySelector(`[gps-entity-place="latitude: ${model.lat}; longitude: ${model.lng};"]`)
//         .addEventListener("click", function () {
        
//         /* создаю элементы поля с информацией - две кнопки и инфобокс */
//          let infobox = document.createElement('div');
//          infobox.classList.add('info');
//          infobox.setAttribute("id","infobox");
       
//          let text = document.getElementbyId('infobox').appendChild('div');
//          text.setAttribute("id","text-info");
       
//          let text_paragraph = document.getElementbyId('text-info').appendChild('p');
//          text_paragraph.setAttribute("id","text_paragraph");
//          document.getElementById('text_paragraph').innerText(model.values[modelIndex]);
        
        
//         /* функция для изменения текста внутри поля */
//          function changeText(id, text) {
//            document.getElementById('id').innerText(text);
//           };  
  
//          let button1 = document.getElementbyId('infobox').appendChild('button');
//          button1.setAttribute("name","button1");  
//          button1.setAttribute("data-action","change");
        
       
//          let button2 = document.getElementbyId('infobox').appendChild('button');
//          button2.setAttribute("name","button2");
//          button2.setAttribute("data-action","change");
        
//          /* кнопка выхода */
//          let button3 = document.getElementbyId('infobox').appendChild('button');
//          button3.setAttribute("name","button3");
//          button3.setAttribute("data-action","change");
        
//          /*forward button func*/
//          document
//           .querySelector("[name='button1']")
//           .addEventListener("click", function () {
//             modelIndex = (modelIndex - 1 + models[0].values.length) % models[0].values.length;
//               changeText("text_paragraph", model.values[modelIndex]);
//             });
        
  
//          /*back button func*/
//         document
//           .querySelector("[name='button2']")
//           .addEventListener("click", function () {
//             modelIndex = (modelIndex + 1) % models[0].obj_model.length;
//             changeText("text_paragraph", model.values[modelIndex]);
//             });
        
//         /*return button func*/
//         document
//           .querySelector("[name='button3']")
//           .addEventListener("click", function () {
//             let element = document.getElementById("infobox");
//             element.remove();
//             });
        
//         });
//       });
//   };
        