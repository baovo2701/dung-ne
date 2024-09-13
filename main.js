// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em đã dành thời gian để bấm vào cái bức thư củ chuối này của anh và anh có những điều muốn gởi gắm đến tình iu của anhh❤️. Dạo này em bé có những áp lực về học tập, không đi làm nữa nhưng bù lại là những chuỗi ngày học hành, anh thấy bé giỏi lắm í, rất là tự hào về em ngiu này. Nhưng không sao, anh đố em biết yêu là động từ hay tính từ? Sai bétttttt là tính từ, tại vì nó tính từ lúc anh gặp em lần đầu tiên đóoo❤️❤️❤️. Thôi anh xò chám zay thôi chứ thật ra anh ngồi mần cái này cũng chỉ mún bé bớt áp lực và nở nụ cười tại vì anh rất yêu nụ cười của em❤️. Chúng mình ở xa nhau, anh cũng không thể ở bên cạnh bé để chăm sóc về và yêu em như những người khác nhưng anh mong mình có thể lấy đó làm động lực bởi vì ANH YÊU EMMMM, RẤT YÊU EMMM. If one day the moon calls you by your name don't be surprised, because every night I tell her about you❤️. Thế nên là cố gắng lên nhé luôn có trái tim anh bên cạnh, yêu em vãi òoooo Moahhh❤️."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})