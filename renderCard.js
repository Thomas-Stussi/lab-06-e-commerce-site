export function renderCard(card) {
    const li = document.createElement('li');
    li.className = card.category;
    li.title = card.description;

    const h3 = document.createElement('h3');
    h3.textContent = card.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + card.image;
    img.alt = card.name + ' image';
    li.appendChild(img);

    //const div = document.createElement('div');
    //div.className = 'descriptions';
    //div.textContent = card.description;
    //li.appendChild(div);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + card.price.toFixed(2);
    
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';                                        
    button.value = card.id;
    p.appendChild(button);

    li.appendChild(p);
    

    return li;
}
