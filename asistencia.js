f = document.getElementsByClassName("YTbUzc");
names_meet = [];
for (i = 0; i < f.length; i++) {
    names_meet.push(f[i].innerHTML.split(" "))
};
copy("names_meet = " + JSON.stringify(names_meet))
////


trs = document.getElementsByClassName("table table-hover")[0].getElementsByTagName("tr")
names_orce = [];
for(i=1;i<trs.length;i++) {
    td = trs[i].getElementsByTagName("td");
    names_orce.push(td[2].innerHTML.split(" "));
}

checks = document.getElementsByClassName("checkbox-slider yesno cbx-alumnos")
for(i = 0; i < checks.length; i++) {
    nnames_orce = names_orce[i];
    for(n=0;n<names_meet.length;n++) {
        nnames_meet = names_meet[n];
        cont = 0;
        for(k=0;k<nnames_orce.length;k++) 
            for(j=0;j<nnames_meet.length;j++) 
                if (nnames_orce[k].toLowerCase() == nnames_meet[j].toLowerCase())
                    cont++;
        if (cont > 1)
            checks[i].checked = true
    }
}
