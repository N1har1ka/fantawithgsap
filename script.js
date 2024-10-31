var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:false
}});
tl.to("#fanta",{
    top:"112%",
    left:"3%",
},'orange')
tl.to("#orange-cut",{
    top:"155%",
    left:"25%"
},'orange')
tl.to("#orange",{
    width:"15%",
    top:"165%",
    right:"10%"
},'orange')
tl.to("#leaf",{
    top:"100%",
    rotate:"130deg",
    left:"78%"
},'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate:"130deg",
    left:"0%"
},'orange')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"20% 95%",
    end:"40% 50%",
    scrub:true,
    markers:false
}});
tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-80%",
    top:"60%",
},"ca")
tl2.from("#cocacola",{
    rotate:"-90deg",
    left:"-60%",
    top:"50%",
},"ca")

tl2.from(".lemon2",{
    rotate:"90deg",
    left:"80%",
    top:"60%",
},"ca")
tl2.from("#pepsi",{
    rotate:"90deg",
    left:"60%",
    top:"50%",
},"ca")
tl2.to("#orange-cut",{
    width:"18%",
    left:"41%",
    top:"205%"
},"ca")
tl2.to("#fanta",{
    width:"32%",
    left:"34%",
    top:"212%"
},"ca")
