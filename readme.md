# Rozjetí projektu:
pro rozjetí css a js buildu je potřeba mít:

1) node.js - https://nodejs.org/en/
2) npm - https://nodejs.org/en/ - stejný balíček
3) parcel js - $ npm install -g parcel-bundler

----
po nainstalování tohoto je potřeba vlézt do rootu projektu a dát příkaz `npm i`
po doinstalování potřebných knihoven (příkaz npm i) stačí dám `npm run build`. Assety se zbuildí a minifikují sami.

------------------------------------------------------

### Changes

03.03.2020

Dobré projít:

1) úpravy v produktové kartě a filtraci
2) úpravy detailu produktu - nákupní panel (to s tím tlačítkem do košíku)
3) typové stránky - většinou jen nové fotky.
4) Design - zmizela z design/index.html třída overflow-hidden
5) Eshop - eshop/index.html - úprava odkazů

08.03.2020

1) Produktové karty - zatím neměnit - to co je zde je zatím nástřel
2) Kategorie - nadpis - nějaký divné, je to podle těch souborů? - měnilo se a je tam teď třída - měla by zde být "topBanner--small"
3) Přehrát styly
4) úprava textu v designu (index.html) banner - přidání textu chuť, hmat ,...

10.03.2020
1) úpravy v detailu produktu (design, eshop), na design/index.html, v eshop/o-nas.html
2) stylove upravy

23.03.2020
1) Přidání nové stránky (webu?) frenčíz
2) Logo frenčízy je i v na všech jiných webech (drink2go i cans4all) a také je v mobilním menu (zase na všech).
3) Všechny assety pro frenčízy jsou v assets/img/frensiza + logo je logo--frensiza.svg
4) Bude ještě změna textů ve frenčízách

10.04.2020
1) Komplet předělání homepage eshopu (drink2go). Všechno vše v souboru eshop/index.htm - proběhla změna stylů a obrázků, stačí přehrát složku /dist/ a pak ještě obrázky - ty lze najít zde: assets/img - stačí zase nahradit 1:1

13.04.2020
1) úpravy eshop/index.html a eshop/kategorie a přidání podkategorií do eshop/kategorie/



30.04.2020
1) Chybějící ikonky (v nadpisech) na HP eshop
2) opravit menu (na telefonu) ideálně podle: http://drink2go.loc/eshop/
3) Produktová karta - takto: https://alesmraz.github.io/drink2go/eshop/kategorie-nase-drinky.html
4) Detail produktu - přidat třídu page--noBg
5) výměna stylů a js

Úpravy v HTML lze najít zde v porovnání:
1) eshop/detail.html : http://www.mergely.com/LqxnzMld/
2) eshop/index.html : http://www.mergely.com/TlB2TZIT/



02.05.2020
1) Změna menu. Ideálně projít celou hlavičku - na každé html stránce to je změněné
2) Změna patičky - přidání log
3) Přehrát styly a js
4) Přehrát obrázky v 
    - assets/svg/
    - podle printscreenu: https://prnt.sc/s9mvfu