$(document).ready(function(){
    var time = 2000;
    $im1 = $('#f-imageSE-1');
    $im2 = $('#f-imageSE-2');
    $im3 = $('#f-imageSE-3');
    $im1a = $('#f-image11-1')
    $im2a = $('#f-image11-2')
    $im3a = $('#f-image11-3')
    $im1b = $('#f-imagepro-1')
    $im2b = $('#f-imagepro-2')
    $im3b = $('#f-imagepro-3')
    setInterval(function(){
        changeImage();
    }, time);
    var currentImage = 1;
function changeImage(){
    switch(currentImage) {
        case 1:
            // show image 2
            $im1.hide();
            $im1a.hide();
            $im1b.hide();
            $im2.show();
            $im2a.show();
            $im2b.show();
            $im3.hide();
            $im3a.hide();
            $im3b.hide();
            currentImage = 2;
            break;
        case 2:
            // show image 3
            $im1.hide();
            $im1a.hide();
            $im1b.hide();
            $im2.hide();
            $im2a.hide();
            $im2b.hide();
            $im3.show();
            $im3a.show();
            $im3b.show();
            currentImage = 3;
            break;
        default:
               // show image 1
            $im1.show();
            $im1a.show();
            $im1b.show();
            $im2.hide();
            $im2a.hide();
            $im2b.hide();
            $im3.hide();
            $im3a.hide();
            $im3b.hide();
            currentImage = 1 ;
        }
    }
}
)
