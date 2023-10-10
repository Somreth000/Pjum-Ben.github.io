$(document).ready(function () {
    var items = [
        {
            "name": 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ',
            'sub': [
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ1', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ2', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ3', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ4', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ5', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ6', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ7', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ8', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ9', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ10', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ11', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ12', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ13', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ14', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
                { 'name': 'រដូវ​បុណ្យ​ភ្ជុំបិណ្ឌ15', 'sub-2': ['Apple1@', 'Apple1@', 'Apple3@'] },
            ]
        },


        {
            "name": 'ពិធីកាន់បិណ្ឌ',
            'sub': [
                { 'name': 'ពិធីកាន់បិណ្ឌ13', 'sub-2': ['ពិធីកាន់បិណ្ឌ1#', 'ពិធីកាន់បិណ្ឌ13#', 'ពិធីកាន់បិណ្ឌ13#'] },
                { 'name': 'ពិធីកាន់បិណ្ឌ14', 'sub-2': ['ពិធីកាន់បិណ្ឌ14', 'ពិធីកាន់បិណ្ឌ14#', 'ពិធីកាន់បិណ្ឌ14#'] },
                { 'name': 'ពិធីកាន់បិណ្ឌ15', 'sub-2': ['ពិធីកាន់បិណ្ឌ15#', 'ពិធីកាន់បិណ្ឌ15#', 'ពិធីកាន់បិណ្ឌ15#'] },
            ]
        },

        {
            "name": 'ពិធីបំបួសភ្នំខ្សាច់',
            'sub': [
                { 'name': 'ទង់រលកទី១ តំណាងនិកាយ មហាយាន', 'sub-2': ['Amazons1%', 'Amazons1%', 'Amazons1%'] },
                { 'name': 'ទង់រលកទី២ តំណាងនិកាយ ហិនយាន', 'sub-2': ['Amazons1%', 'Amazons1%', 'Amazons1%'] },
                { 'name': 'ទង់រលកទី៣ តំណាងឱ្យនិកាយ ព្រះសាស្តារ ឬ ព្រះពុទ្ធថេរវាទ ', 'sub-2': ['Amazons1%', 'Amazons1%', 'Amazons1%'] },
            ]
        },

        {
            "name": 'ពិធីបុណ្យផ្សេងៗនៅប្រទេសកម្ពុជា',
            'sub': [
                { 'name': 'ពិធីបុណ្យចូលឆ្នាំ', 'sub-2': ['mata1%', 'mata1%', 'mata1%'] },
                { 'name': 'ពិធីបុណ្យអ៊ុំទូក', 'sub-2': ['mata1%', 'mata1%', 'mata1%'] },
                { 'name': 'បុណ្យច្រត់ព្រះនង្គ័ល  ', 'sub-2': ['mata1%', 'mata1%', 'mata1%'] },
            ]
        },
    ];
    get_item();
    function get_item() {
        var txt = '';
        items.forEach((e) => {
            txt += `
           <li class="m1">
               <a h>${e.name}  <i class="fa-solid fa-plus"></i></a>
       </li>  `
        });
        $('.left-menu').find('.box ul').html(txt);
    }
    $('.left-menu').on('click', '.box ul .m1', function () {
        var ethis = $(this);
        var i = ethis.index();
        var sub = items[i]['sub'];
        var txt2 = '';
        sub.forEach((i) => {
            txt2 += `
                <li>
                    <a href="">${i.name}</a>
                </li> `
        });
        var sub_menu = `<ul class="sub-menu">${txt2}</ul>`;
        if (ethis.find('.sub-menu').length == 0) {
            $(this).append(sub_menu);
            ethis.find('i').removeClass('fa-plus');
            ethis.find('i').addClass('fa-minus');
        }
        else {
            if (ethis.find('.fa-minus').length > 0) {
                ethis.find('.sub-menu').slideUp();
                ethis.find('i').addClass('fa-plus');
                ethis.find('i').removeClass('fa-minus');
            }
            else {
                ethis.find('.sub-menu').slideDown();
                ethis.find('i').removeClass('fa-plus');
                ethis.find('i').addClass('fa-minus');
            }
        }
    });
    getSlide();
    // var slide =$('body').find('.slide');
    var slide = $('.slide');
    var indSlide = 0;
    var numSlide = slide.length;
    slide.hide();
    slide.eq(indSlide).show();
    //aotu slide
    var mySlde = setInterval(function () {
        get_auto()
    }, 1000);

    function get_auto() {
        slide.eq(indSlide).hide();
        $('.pagination').find('li').eq(indSlide).removeClass('active');
        indSlide++;
        if (indSlide == numSlide) {
            indSlide = 0;
        }
        slide.eq(indSlide).show();
        $('.pagination').find('li').eq(indSlide).addClass('active');
    }
})
//  popup imge
$(".paragraph-container").on("click", ".left-paragraph", function () {
    var ethis = $(this)
    var img = ethis.find("img").attr("src")
    var txtpopup = `
    <div class="popup">
      <div class="frm-view">
        <div class="left-popup">
            <img src="${img}" alt="">
            <i class="fa-solid fa-circle-xmark btn-close"></i>
        </div>
      </div>
    </div>`
    $("body").append(txtpopup)
})
$("body").on("click", ".popup .btn-close", function () {
    $(this).parents(".popup").remove()
});
