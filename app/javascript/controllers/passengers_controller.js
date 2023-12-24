import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["template","form"]
    static values = { number: Number}

    renderForm() {
        let clone = this.templateTarget.content.cloneNode(true)
        this.formTarget.appendChild(clone)
    }

    deleteForm() {
        let field = document.querySelector(".fields")
        field.remove()
    }
}