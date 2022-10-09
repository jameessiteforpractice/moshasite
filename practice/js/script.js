$(function () {
  $(".topbtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(".messagebtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#message").offset().top - 30,
      },
      500
    );
  });

  $(".gallerybtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#gallery").offset().top - 30,
      },
      500
    );
  });

  $(".brandbtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#brand").offset().top - 30,
      },
      500
    );
  });

  $(".projectbtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#project").offset().top - 30,
      },
      500
    );
  });
  $(".companybtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#company").offset().top - 30,
      },
      500
    );
  });
  $("#menubtn").click(function () {
    if ($(".minimenu").hasClass("hasmenu")) {
      $(".minimenu").slideUp();
      $(".minimenu").removeClass("hasmenu");
      $("#menubtn").html('<i class="fas fa-bars"></i>');
    } else {
      $(".minimenu").slideDown();
      $(".minimenu").addClass("hasmenu");
      $("#menubtn").html('<i class="fas fa-times"></i>');
    }
  });
  $(window).resize(function () {
    var x = $(window).width(); ///横幅を取得////
    var y = 800;
    if (x > y) {
      ////横画面が800よりも大きいとき////
      $(".minimenu").css("display", "none"); ////要素にクラスを追加///
    } else if ($(".minimenu").hasClass("hasmenu")) {
      $(".minimenu").css("display", "block");
    }
  });
});
