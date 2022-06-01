const FilterItem = document.querySelectorAll('.Items');
const FilterImage = document.querySelectorAll('.Images');

FilterItem.forEach((item) => {
    item.addEventListener('click', (selectedItem) => {
        
        document.querySelector('.active').classList.remove('active');
        selectedItem.target.classList.add('active');

        let FilterName = selectedItem.target.getAttribute('data-name');
        console.log(FilterName);

        FilterImage.forEach((image) => {
            let imageAttribute = image.getAttribute('data-name');
            if (imageAttribute == FilterName || FilterName == 'All') {
                image.classList.remove('hide');
                image.classList.add('show');
            } else {
                image.classList.add('hide');
            }
        });
    });
});
