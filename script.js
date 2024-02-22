window.onload = function() {
    const handleScroll = () => {
        var navbar = document.getElementById("navbar");
        var button1 = document.getElementById("button1");
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            navbar.style.backgroundColor = "white";
            button1.style.backgroundColor = "rgb(254, 243, 243)";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    };

    window.addEventListener('scroll', handleScroll);

    window.onunload = function() {
        window.removeEventListener('scroll', handleScroll);
    };
};
