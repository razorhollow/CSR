import {services} from "./services.js"

let serviceSection = document.querySelector('#services')

function renderServices() {
  let title = document.createElement('h2')
  title.textContent = 'Services We Offer'
  serviceSection.append(title)
  services.forEach(service => {
    let currentService = document.createElement('div')
    currentService.classList.add('service-card')
    currentService.innerHTML = 
    `
      <img src="${service.icon}" class="card-icon" alt="service icon">
      <div class="accordion accordion-flush d-flex justify-content-center" id="accordionFlush">
        <div class="accordion-item">
          <h3 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            ${service.title}
          </button>
          </h3>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
            <div class="accordion-body">
              ${service.description}
            </div>
          </div>
        </div>
      </div>
    `
  serviceSection.append(currentService)
  })
}

renderServices()


