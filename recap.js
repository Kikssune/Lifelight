document.addEventListener("DOMContentLoaded", function () {
    const yearList = document.querySelectorAll('.year');
    const yearTitle = document.getElementById('year-title');
    const yearLabel = document.getElementById('year-label');
    const textContent = document.getElementById('text-content');
    const imageContent = document.getElementById('image-content');
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Predefined content for each year
    const yearData = {
        2003: { images: ["images/2003_1.jpg"] },
        2004: { images: ["2004oversize.jfif"] },
        2005: { images: ["2005youngpic.jfif"] },
        2006: { images: ["2006gerardborn.jfif"] },
        2007: { images: ["images/2007_1.jpg"] },
        2008: { images: ["2008classpic.jfif","2008classpicture.jfif", "2008grad.jfif", "2008withf.jfif"] },
        2009: { images: ["2009fieldtrip.jfif", "2009pcshome.jfif"] },
        2010: { images: ["2010sjagrade2.jfif"] },
        2011: { images: ["2011.jfif", "2011fieldtrip.jfif"] },
        2012: { images: ["2012birthday"] },
        2013: { images: ["2013artclass.jfif"] },
        2014: { images: ["2014artclass"] },
        2015: { images: ["images/2015_1.jpg"] },
        2016: { images: ["2016birthday.jfif"] },
        2017: { images: ["2017baguio.jfif"] },
        2018: { images: ["2018prom.jfif", "2018promother.jfif"] },
        2019: { images: ["images/2019_1.jpg", "images/2019_2.jpg"] },
        2020: { images: ["images/2020_1.jpg"] },
        2021: { images: ["2021highschoolgrad.jfif"] },
        2022: { images: ["2022tptsreunion.jfif"] },
        2023: { images: ["images/2023_1.jpg"] },
        2024: { images: ["2024weightloss.jfif", "2024weightloss2.jfif"] }
    };

    // Function to display content based on selected year
    function displayContent(year) {
        yearTitle.textContent = ` ${year}`;
        yearLabel.textContent = `Highlight Of The Year  ${year}`;
        if (yearData[year]) {
            textContent.textContent = yearData[year].text;
            imageContent.innerHTML = yearData[year].images.map(img => `<img src="${img}" alt="${year} Image">`).join('');
        }
    }

    // Event listeners for year selection
    yearList.forEach(item => {
        item.addEventListener('click', () => {
            yearList.forEach(year => year.classList.remove('active'));
            item.classList.add('active');
            const selectedYear = item.dataset.year;
            displayContent(selectedYear);
        });
    });

    // Dropdown toggle functionality
    dropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });
});