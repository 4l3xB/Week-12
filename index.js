class Crud {
    constructor() {
        this.url = 'https://65ede7a808706c584d9ad92b.mockapi.io/Week12/users'
    }

    async create(user) {
        let response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
        let confirmation = await response.json();
        console.log(confirmation);
    }

    async readOne(id) {
        let response = await fetch(`${this.url}/${id}`);
        let data = await response.json();
        console.log(data);
    }

    async readAll() {
        let response = await fetch(this.url);
        let data = await response.json();
        console.log(data);
    }

    async update(id, updatedChange) {

        let response = await fetch(`${this.url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedChange),
            headers: {
                'content-type': 'application/json'
            }
        })
        let confirmation = await response.json();
        console.log(confirmation);
    }

    async delete(id) {
        let response = await fetch(`${this.url}/${id}`,{
            method: 'DELETE'
        });
        let confirmation = await response.json();
        console.log(confirmation);
    }

}

let fakeUser = {
    name: 'Mike Jones',
    image: 'My URL image',
    email: 'gmail'
}

let fakeChange = {name: 'Mike'}

let project = new Crud();

// project.readOne(17)
//project.readAll();
// project.delete(17)
project.create(fakeUser);
// project.update(1,fakeChange);
