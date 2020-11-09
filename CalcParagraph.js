function calcParagraph(){
    let box1 = document.getElementById("box1").value;
    document.getElementById("output1").innerHTML = "众所周知，一般来说，随着社会的不断发展，人们的生活水平在不断地提升。<br>"
        + "最近网络上出现的" + box1 + "这个概念，那么" + box1 + "是什么呢？<br>"
        + "就和小编一起来看看吧。 " + box1 + "究竟是什么呢？" + box1 + "就是" + box1 + "，<br>"
        + "由于最近网络上对" + box1 + "的讨论，" + box1 + "的热度地增加，" + box1 + "就火起来了。<br>"
        + "大家可能会感到十分惊讶，但事实就是这样。小编也感到很惊讶。";
}

function writePoem(){

    let nounZero = ["四月", "七月", "三月", "十月", "春天", "夏天", "秋天", "冬天", "普罗旺斯", "布加勒斯特","阿姆斯特丹"]
    let nounOne = ["风","花","雪", "月","心","爱"]
    let verb = ["安定", "回来", "飞舞", "翱翔"]
    document.getElementById("output2").innerHTML = nounZero[Math.floor(random(1, nounZero.length))-1]
        + "的" + nounOne[Math.floor(random(1, nounOne.length))-1] + "<br>"
        + "我的" + nounOne[Math.floor(random(1, nounOne.length))-1] + "<br>"
        + "何时才能" + verb[Math.floor(random(1, verb.length))-1] + "<br>"
}

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}