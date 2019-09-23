$(document).ready(function () {
    var h = $(window).height();
    var w = $(window).width();
    // console.log(width,height);
    var index = 1;
    for (var i = 1; i <= 9; i++) {
        $(".container" + i).height(h);
        $(".bgc" + i + " img").height(h);
        $(".bgc" + i + " img").width(w);
    }
    var m = document.getElementById("m");
    m.play();
    m.loop = true;
    var musicFlag = true;

    $("#music").bind("touchstart",function () {
       if (musicFlag){
           m.pause();
           $(this).attr("src","img/musicoff.png");
           $(this).css("animation-play-state","paused");
           musicFlag = false;
       }
       else{
           m.play();
           $(this).attr("src","img/music.png");
           $(this).css("animation-play-state","running");
           musicFlag = true;
       }
    });
    // $(".bgc1 img").width(width);
    function pageOne() {
        $("#re").animate({
            top: 0,
            left: 0
        }, 500);
        $("#hh").animate({
            bottom: 0,
            left: 0
        }, 500);
        $("#rr").animate({
            top: 0,
            right: 0
        }, 500);
        $("#gg").animate({
            top: 0,
            left: "2.41rem"
        }, 500);
        $("#ccc").animate({
            top: 0,
            right: "2.09rem"
        }, 500);
        $("#dd").animate({
            top: "2.2rem",
            left: ".03rem"
        }, 500);
        $("#dda").animate({
            top: "2.55rem",
            left: "1.69rem"
        }, 500);
        $("#qq").animate({
            top: "1.39rem",
            left: "1.41rem"
        }, 500);
        $("#yy").animate({
            bottom: ".08rem",
            right: 0
        }, 500, function () {
            $("#pd").css({
                "animation": "pd 800ms linear 1",
                display: "block"
            });
            setTimeout(function () {
                $("#pr").css({
                    "animation": "pr 800ms linear 1",
                    display: "block"
                })
            }, 500);
            setTimeout(function () {
                $("#pe").css({
                    "animation": "pr 800ms linear 1",
                    display: "block"
                })
            }, 900);
            setTimeout(function () {
                $("#pm").css({
                    "animation": "pr 800ms linear 1",
                    display: "block"
                })
            }, 1300);
            setTimeout(function () {
                $("#maker").css({
                    "animation": "pr 800ms linear 1",
                    display: "block"
                })
            }, 1700);
            setTimeout(function () {
                $("#Cddd").css({
                    "animation": "zoomIn 1s",
                    display: "block"
                })
            }, 2500);
            setTimeout(function () {
                $("#Cd").css({
                    "animation": "slideInLeft 800ms",
                    display: "block"
                });
                $("#Cdd").css({
                    "animation": "slideInRight 800ms",
                    display: "block"
                })
            }, 3500);
        });
    }

    function pageTwo() {
        $("#ww").css("left","15rem");
        $("#www").css("left","-20rem");
        setTimeout(function () {
            $("#ww").animate({
                left:0
            },1000);
            $("#www").animate({
                left:0
            },1000);
        },1000)
    }
    function initTwo() {
        setTimeout(function () {
            $("#ww").css("left","15rem");
            $("#www").css("left","-20rem");
        },1000);
    }
    function pageThree() {
        $("#p3_img4").jqFloat({
            width: 10,
            height: 10,
            speed: 800
        });
        $("#p3_img_5").jqFloat({
            width: 10,
            height: 10,
            speed: 800
        });
        $("#p3_group4").jqFloat({
            width: 10,
            height: 10,
            speed: 800
        });
        $("#p3_img3").jqFloat({
            width: 10,
            height: 10,
            speed: 800
        });
        $("#p3_grounp4").jqFloat({
            width: 10,
            height: 10,
            speed: 800
        });
        $("#p3_group2").jqFloat({
            width: 10,
            height: 10,
            speed: 800
        });
        $("#p3_group1").jqFloat({
            width: 10,
            height: 10,
            speed: 800
        });
        $("#p3_img5").jqFloat({
            width: 10,
            height: 10,
            speed: 800
        });
    }

    function pageFour() {
        setTimeout(function () {
            $("#p4_change").css("display", "block");
            $("#p4_change").css("animation", "zoomIn 1s");
        }, 1000);
        setTimeout(function () {
            $("#p4_pointlight").css("animation", "p4_fang 2s linear");
            $("#p4_pointlight").css("display", "block");
            $("#individual").css("display", "block");
            // $("#individual img").css("animation","individual 2s linear")
        }, 2000);
        setTimeout(function () {
            $("#p4_circle").css("animation", "p4_suo 2s linear");
            $("#p4_CCline").css("display", "block");
        }, 4000);
        setTimeout(function () {
            $("#p4_objct").css("animation", "lightSpeedIn 1s linear,p4_op 2s linear infinite");
            $("#p4_objct").css("display", "block");
        }, 6000)
    }

    function initFour() {
        $("#p4_pointlight").css("animation", "");
        $("#p4_circle").css("animation", "");
        $("#p4_change").css("animation", "");
        $("#individual").css("animation", "");
        $("#p4_objct").css("animation", "");
        setTimeout(function () {
            $("#p4_CCline").css("display", "none");
            $("#p4_change").css("display", "none");
            $("#p4_pointlight").css("display", "none");
            $("#individual").css("display", "none");
            $("#p4_objct").css("display", "none");
        }, 1000);
    }

    function initSwiper() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            keyboard: true,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        $("#individual img").bind("touchstart",function () {
            $("#individual").css("visibility", "hidden");
            $("#p4_objct").css("visibility", "hidden");
            $("#p4_swiper").css("visibility", "visible");
            $(".swiper-container").css("visibility", "hidden");
            $("#p4_x").css("visibility", "hidden");
            var imgIndex = $(this).index() + 1;
            var imgSrc = $(".swiper-slide img").eq(imgIndex).attr("src");
            mySwiper.slideTo(imgIndex, 0, false);
            var imgDiv = $("<img id='imgDiv'>");
            imgDiv.attr("src", imgSrc);
            imgDiv.css({
                position: "absolute",
                width: "5.53rem",
                top: "4rem",
                left: "1rem",
                animation: "zoomIn 1s",
            });
            $(".container4").append(imgDiv);
            setTimeout(function () {
                $(".swiper-container").css("visibility", "visible");
                $("#p4_x").css("visibility", "visible");
                $("#imgDiv").css("display", "none");
                $("#imgDiv").css("animation", "zoomOut 1s");
            }, 1000)
        });
        $("#p4_x").bind("touchstart",function () {
            var activeIndex = mySwiper.activeIndex;
            var activeSrc = $(".swiper-slide img").eq(activeIndex).attr("src");
            ;
            $("#imgDiv").attr("src", activeSrc);
            $("#p4_swiper").css("visibility", "hidden");
            $("#p4_x").css("visibility", "hidden");
            $(".swiper-container").css("visibility", "hidden");
            $("#individual").css("visibility", "visible");
            $("#p4_objct").css("visibility", "visible");
            $("#imgDiv").css("display", "block");
            setTimeout(function () {
                $("#imgDiv").remove();
            }, 1000);
        })
    }

    function pageFive() {
        setTimeout(function () {
            $("#p5_tamen").css("animation", "zoomIn 500ms linear");
            $("#p5_tamen").css("display", "block");
        }, 1000);
        setTimeout(function () {
            $("#p5_img10").slideDown(500, function () {
                $("#p5_img10").animate({
                    right: "1.2rem",
                    top: "10.35rem",
                    width: "1.3rem"
                }, 500);
                $("#p5_shadow10").animate({
                    opacity: 1
                }, 500);
                $("#p5_img9").slideDown(500, function () {
                    $("#p5_img9").animate({
                        left: "1.55rem",
                        top: "11rem",
                        width: "1.3rem"
                    }, 500);
                    $("#p5_shadow9").animate({
                        opacity: 1
                    }, 500);
                    $("#p5_img8").slideDown(500, function () {
                        $("#p5_img8").animate({
                            right: ".4rem",
                            top: "7.4rem",
                            width: "1.3rem"
                        }, 500);
                        $("#p5_shadow8").animate({
                            opacity: 1
                        }, 500);
                        $("#p5_img6").slideDown(500, function () {
                            $("#p5_img6").animate({
                                left: "3.35rem",
                                top: "8.35rem",
                                width: "1.3rem"
                            }, 500);
                            $("#p5_shadow6").animate({
                                opacity: 1
                            }, 500);
                            $("#p5_img7").slideDown(500, function () {
                                $("#p5_img7").animate({
                                    left: ".25rem",
                                    top: "7.45rem",
                                    width: "1.3rem"
                                }, 500);
                                $("#p5_shadow7").animate({
                                    opacity: 1
                                }, 500);
                                $("#p5_img5").slideDown(500, function () {
                                    $("#p5_img5").animate({
                                        left: "2.1rem",
                                        top: "4.9rem",
                                        width: "1.3rem"
                                    }, 500);
                                    $("#p5_shadow5").animate({
                                        opacity: 1
                                    }, 500);
                                    $("#p5_img4").slideDown(500, function () {
                                        $("#p5_img4").animate({
                                            left: "4.1rem",
                                            top: "5.4rem",
                                            width: "1.3rem"
                                        }, 500);
                                        $("#p5_shadow4").animate({
                                            opacity: 1
                                        }, 500);
                                        $("#p5_img3").slideDown(500, function () {
                                            $("#p5_img3").animate({
                                                left: "6rem",
                                                top: "2.75rem",
                                                width: "1.3rem"
                                            }, 500);
                                            $("#p5_shadow3").animate({
                                                opacity: 1
                                            }, 500);
                                            $("#p5_img2").slideDown(500, function () {
                                                $("#p5_img2").animate({
                                                    left: "3.9rem",
                                                    top: "2.25rem",
                                                    width: "1.3rem"
                                                }, 500);
                                                $("#p5_shadow2").animate({
                                                    opacity: 1
                                                }, 500);
                                                $("#p5_img1").slideDown(500, function () {
                                                    $("#p5_img1").animate({
                                                        left: ".35rem",
                                                        top: "2.8rem",
                                                        width: "1.3rem"
                                                    }, 500);
                                                    $("#p5_shadow1").animate({
                                                        opacity: 1
                                                    }, 500);
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }, 1500);
        setTimeout(function () {
            $("#p5_tap").css("animation", "lightSpeedIn 1s linear,p4_op 2s linear infinite");
            $("#p5_tap").css("display", "block");
        }, 7000);
    }

    function initFive() {
        $("#p5_tamen").css("animation", "");
        $("#p5_shadow img").css("animation", "");
        $("#p5_img img").css("animation", "");
        $("#p5_tap").css("animation", "");
        $("#p5_img img").stop(false, true);
        setTimeout(function () {
            $("#p5_tamen").css("display", "none");
            $("#p5_tap").css("display", "none");
            $("#p5_shadow img").css("opacity", "0");
            $("#p5_img img").css("display", "none");
            $("#p5_img img").css("width", "1.1rem");
            $("#p5_img1").css({
                left: ".75rem",
                top: "3.6rem"
            });
            $("#p5_img2").css({
                left: "4.25rem",
                top: "2.95rem"
            });
            $("#p5_img3").css({
                right: ".1rem",
                top: "3.5rem"
            });
            $("#p5_img4").css({
                left: "4.5rem",
                top: "6.1rem"
            });
            $("#p5_img5").css({
                left: "2.4rem",
                top: "6.1rem"
            });
            $("#p5_img6").css({
                left: "3.75rem",
                top: "9.05rem"
            });
            $("#p5_img7").css({
                left: ".6rem",
                top: "8.2rem"
            });
            $("#p5_img8").css({
                right: ".2rem",
                top: "8.2rem"
            });
            $("#p5_img9").css({
                left: "1.9rem",
                top: "11.7rem"
            });
            $("#p5_img10").css({
                right: "1rem",
                top: "11.05rem"
            });
        }, 1000);
        setTimeout(function () {
            $("#p5_detailContainer").children().remove();
        }, 1000)
    }

    function initDetail() {
        var p5_detailContainer = $("#p5_detailContainer");
        $("#p5_img img").bind("touchstart",function () {
            var imgIndex = $(this).index() + 1;
            var imgTopArr = "images/pagefive/0" + imgIndex + ".jpg";
            var imgBottomArr = "images/pagefive/00" + imgIndex + ".png";
            var p5 = $("<img src='images/pagefive/p5_alertBox.png' id='p5'>");
            var p5_fx = $("<img src='images/pagefive/fx.png' id='p5_fx'>");
            var p5_01 = $("<img src=" + imgTopArr + " id='p5_01'>");
            var p5_001 = $("<img src=" + imgBottomArr + " id='p5_001'>");
            var p5_detail = $("<div id='p5_detail" + imgIndex + "'></div>");
            var detail = $("<div class='detail'></div>");
            p5_detail.append(detail);
            detail.append(p5);
            detail.append(p5_01);
            detail.append(p5_001);
            detail.append(p5_fx);
            p5_detailContainer.append(p5_detail);
            var top = p5_detail.css("top");
            var left = p5_detail.css("left");
            console.log(top, left);
            p5_detail.animate({
                top: "1.35rem",
                left: 0,
            }, 1000);
            p5_detail.css("animation", "p5_alert 1s linear 2");
            p5_detail.css("animation-direction", "alternate");
            setTimeout(function () {
                p5_detail.css("animation-play-state", "paused");
            }, 1000);
            p5_fx.bind("touchstart",function () {
                p5_detail.css("animation-play-state", "running");
                p5_detail.animate({
                    top: top,
                    left: left,
                }, 1000);
                setTimeout(function () {
                    p5_detail.remove();
                }, 1000)
            })
        })
    }

    function pageSix() {
        setTimeout(function () {
            $("#p6_square img").css("display", "block");
            $("#p6_ttww").css("display", "none");
            $("#p6_ttw").css("display", "none");
            $("#p6_t1").animate({
                top: "1.57rem",
                left: ".44rem",
                width: "2.73rem"
            }, 1000);
            $("#p6_t2").animate({
                top: "1.43rem",
                right: ".56rem",
                width: "2.95rem"
            }, 1000);
            $("#p6_t5").animate({
                top: "1.35rem",
                left: "2.09rem"
            }, 1000);
            $("#p6_ttw").fadeIn(1000);
            $("#p6_t3").animate({
                top: "4rem",
                right: "0",
                width: ".63rem"
            }, 1000);
            $("#p6_t4").animate({
                top: "1.62rem",
                left: "0",
                width: ".48rem"
            }, 1000);
            $("#p6_t6").animate({
                top: "1.33rem",
                right: "0",
                width: ".34rem"
            }, 1000);
            $("#p6_t7").animate({
                top: "5.24rem",
                left: "0",
                width: ".63rem"
            }, 1000);
            $("#p6_t8").animate({
                top: "11.35rem",
                right: ".23rem",
                width: ".31rem"
            }, 1000);
        }, 1000);
        setTimeout(function () {
            $("#p6_img6").fadeIn(500, function () {
                $("#p6_img5").fadeIn(500, function () {
                    $("#p6_img3").fadeIn(500, function () {
                        $("#p6_img4").fadeIn(500, function () {
                            $("#p6_ttww").fadeIn(1500);
                            $("#p6_img2").fadeIn(500, function () {
                                $("#p6_img1").fadeIn(500, function () {

                                })
                            })
                        })
                    })
                })
            })
        }, 1000);
        setTimeout(function () {
            $('#p6_t7').jqFloat({
                width: 50,
                height: 50,
                speed: 7000
            });
            $('#p6_t3').jqFloat({
                width: 50,
                height: 50,
                speed: 7000
            });
            $('#p6_t8').jqFloat({
                width: 50,
                height: 50,
                speed: 7000
            });
        }, 2000);
    }

    function initSix() {
        $("#p6_square img").css("animation", "");
        $("#p6_private img").css("animation", "");
        setTimeout(function () {
            $("#p6_square img").css("display", "none");
            $("#p6_private img").css("display", "none");
            $('#p6_t7').stop();
            $('#p6_t3').stop();
            $('#p6_t8').stop();
            $("#p6_t1").css({
                width: "4.73rem",
                top: "1.57rem",
                left: "20.44rem"
            });
            $("#p6_t2").css({
                width: "4.95rem",
                top: "1.43rem",
                right: "20.56rem"
            });
            $("#p6_t5").css({
                width: "2.72rem",
                top: "20.35rem",
                left: "2.09rem"
            });
            $("#p6_t3").css({
                width: "2.63rem",
                top: "20rem",
                right: "20rem"
            });
            $("#p6_t4").css({
                width: "4.48rem",
                top: "15.62rem",
                left: "14rem"
            });
            $("#p6_t6").css({
                width: "2.34rem",
                top: "15.33rem",
                right: "14rem"
            });
            $("#p6_t7").css({
                width: "2.63rem",
                top: "11.24rem",
                left: "14rem"
            });
            $("#p6_t8").css({
                width: "2.31rem",
                top: "11.35rem",
                right: "15.23rem"
            });
        }, 1000);
    }

    function pageSeven() {
        $('#p7_square img').jqFloat({
            width: 50,
            height: 50,
            speed: 3000
        });
        setTimeout(function () {
            $("#p7_img1").fadeIn(1000, function () {
                $("#p7_img2").fadeIn(1000, function () {
                    $("#p7_linemask").animate({
                        top: "13.74rem"
                    }, 2000);
                    setTimeout(function () {
                        $("#p7_img3").animate({
                            right: ".56rem"
                        }, 500);
                    }, 500);
                    setTimeout(function () {
                        $("#p7_img4").animate({
                            left: ".27rem"
                        }, 500);
                    }, 1000);
                    setTimeout(function () {
                        $("#p7_img5").animate({
                            right: "1.13rem"
                        }, 500);
                    }, 1500);

                })
            })
        }, 1000)
    }

    function initSeven() {
        setTimeout(function () {
            $("#p7_img1").hide();
            $("#p7_img2").hide();
            $("#p7_linemask").css("top", "3.74rem");
            $("#p7_img3").css("right", "-5.56rem");
            $("#p7_img4").css("left", "-5.73rem");
            $("#p7_img5").css("right", "-4.87rem");
        }, 1000)
    }

    function pageEight() {
        $("#p8_img1").css({
            display:"block",
            left:"15rem"
        });
        setTimeout(function () {
            $("#p8_block1").animate({
                top:"1.56rem",
                left:".76rem"
            },800);
            $("#p8_block2").animate({
                top:"1.46rem",
                right:".47rem"
            },800);
            $("#p8_block3").animate({
                top:"1.7rem",
                left:"2.24rem"
            },800);
            $("#p8_block4").animate({
                top:"1.64rem",
                left:"-.2rem"
            },800);
            $("#p8_block5").animate({
                top:".4rem",
                right:"-.8rem"
            },800);
            $("#p8_block6").animate({
                top:"3.28rem",
                right:".78rem"
            },800);
        },1000);
        setTimeout(function () {
            $("#p8_img2").fadeIn(800,function () {
                $("#p8_img1").animate({
                    left:0
                },800,function () {
                    $("#p8_img3").fadeIn(500,function () {
                        $("#p8_img4").fadeIn(500,function () {
                            $("#p8_img5").animate({
                                top:"9.89rem"
                            },800,function () {
                                $("#p8_img6").animate({
                                    top:"9.78rem"
                                },800,function () {
                                    $("#p8_img7").animate({
                                        top:"9.81rem"
                                    },800,function () {

                                    });
                                });
                            });
                        })
                    })
                })
            })
        },1800);
    }
    function initEight() {
        setTimeout(function () {
            $("#p8_block1").css({
                top:"20.56rem",
                left:"10.76rem"
            });
            $("#p8_block2").css({
                top:"20.46rem",
                right:"10.47rem"
            });
            $("#p8_block3").css({
                top:"20.7rem",
                left:"12.24rem"
            });
            $("#p8_block4").css({
                top:"20.64rem",
                left:"-10.2rem"
            });
            $("#p8_block5").css({
                top:"20.4rem",
                right:"-10.8rem"
            });
            $("#p8_block6").css({
                top:"30.28rem",
                right:"10.78rem"
            });
            $("#p8_detail img").css("display","none");
            $("#p8_img1").css("display","block");
            $("#p8_img1").css("left","15rem");
            $("#p8_img5").css({
                top:"19.89rem"
            });
            $("#p8_img6").css({
                top:"19.78rem"
            });
            $("#p8_img7").css({
                top:"19.81rem"
            });
        },1000)
    }

    function selectIndex() {
        switch (index) {
            case 1: {
                pageOne();
                break;
            }
            case 2: {
                pageTwo();
                break;
            }
            case 3: {
                pageThree();
                break;
            }
            case 4: {
                pageFour();
                break;
            }
            case 5: {
                pageFive();
                break;
            }
            case 6: {
                pageSix();
                break;
            }
            case 7: {
                pageSeven();
                break;
            }
            case 8: {
                pageEight();
                break;
            }
            default:
                break;
        }
    }

    pageOne();
    initSwiper();
    initDetail();

    touch.on(document,"touchstart",function (e) {
       var event1 = window.event || e;
       event1.preventDefault();
    });

    touch.on(document, "swipeup", function () {
        if (index == 9) return;

        $(".container" + index).slideUp(1000);
        $(".bgc" + index).slideUp(1000);
        if (index == 2){
            initTwo();
        }
        if (index == 4) {
            initFour();
        }
        if (index == 5) {
            initFive();
        }
        if (index == 6) {
            initSix();
        }
        if (index == 7) {
            initSeven();
        }
        if (index == 8) {
            initEight();
        }
        index++;
        if (index == 9){
            $("#slide").hide();
        }
        selectIndex();
    });
    touch.on(document, "swipedown", function () {
        if (index == 0) return;
        index--;
        // selectIndex();
        $(".container" + index).slideDown(1000);
        $(".bgc" + index).slideDown(1000);
        if (index==1){
            initTwo();
        }
        if (index == 3) {
            initFour();
        }
        if (index == 4) {
            initFive();
        }
        if (index == 5) {
            initSix();
        }
        if (index == 6) {
            initSeven();
        }
        if (index == 7) {
            initEight();
        }
        $("#slide").show();
        selectIndex();
    });
});
