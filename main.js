var singular_plural = [
    {
        "matrix": "matrices",
        "die": "dice",
        "child": "children",
        "ox": "oxen",
        "woman": "women",
        "man": "men",
        "tooth": "teeth",
        "foot": "feet",
        "goose": "geese",
        "mouse": "mice",
        "louse": "lice",
        "person": "people",
        "leaf": "leaves",
        "cactus": "cacti",
        "focus": "foci",
        "fungus": "fungi",
        "nucleus": "nuclei",
        "crisis": "crises",
        "analysis": "analyses",
        "thesis": "theses",
        "datum": "data",
        "appendix": "appendices",
        "radius": "radii",
        "bacterium": "bacteria",
        "corpus": "corpora",
        "curriculum": "curricula",
        "index": "indices",
        "memorandum": "memoranda",
        "millennium": "millennia",
        "phenomenon": "phenomena",
        "symposium": "symposia",
        "vortex": "vortices"
    },
    { unCountable: /Science|Fear|Anger|Hope|Peace|Chaos|Propane|News|Patriotism|Faith|Youth|Beauty|Creativity|Grass|Work|Recreation|Travel|Icecream|Alcohol|Yogurt|Ham|Ketchup|Mayonaise|Blood|Data|Bronze|Cash|Assistance|Fur|Wind|Tennis|Golf|Soccer|Badminton|Bocce|Croquet|Chess|Checkers|Dirt|Mud|Hay|Fun|Help|Water|Air|Salt|Sugar|Sand|Rice|Tea|Milk|Butter|Cheese|Bread|Information|Knowledge|Advice|Love|Happiness|Furniture|Luggage|Equipment|Money|Time|Weather|Music|Homework|Software|Hardware|Progress|Respect|Justice|Art|Literature|Evidence|Proof|Courage|Patience|Intelligence|Wisdom|Pollution|Traffic|Language|Freedom|istory|Behavior|Energy|Heat|Cold|Rain|Snow|Ice|Steam|Mist|Smoke|Dust|Oxygen|Carbon|Gas|Electricity|Gravity|Magnetism|Jewelry|Clothing|Footwear|Hair|Paper|Plastic|Rubber|Wool|Gold|Silver|Copper|Aluminum|Iron|Steel|Glass|Wood|Stone|Marble|Concrete|Sandpaper|Leather|Soil|Clay|Cement|Ink|Paint|Flour|Pepper|Vinegar|Oil|Honey|Mustard|Jam|Sauce|Soup|Noodles|Spaghetti|Cereal|Pasta|Meat|Fish|Poultry|Beef|Pork|Lamb|Seafood|Bacon|Egg|Lettuce|Tomato|Cucumber|Carrot|Broccoli|Cauliflower|Spinach|Celery|Cabbage|Onion|Garlic|Ginger|Potato|Cake|Pie|Cookie|Chocolate|cream|Candy|Salad|Milkshake|Coffee|Tea|Beer|Wine|Whiskey|Juice|Soda|Syrup|Margarine|Gravy|Custard|Sorbet|Gelato|Pudding|Baguette|Muffin|Toast|Croissant|Pancake|Waffle|Bagel|Donut|Pretzel|Biscuit|Brownie|Cupcake|Lollipop|Stew|Chili|Vinaigrette|Lemonade|Latte|Espresso|Cappuccino|Mocha|Americano|Grey|Chai|Matcha|Lager|Ale|Stout|Rosé|Champagne|Scotch|Vodka|Rum|Tequila|Brandy|Cognac|Gin|Sake/ },
    { inValid: /bz|bt|tb|cq|dt|iy|qi|cx|dg|fj|mr|fx|gw|gp|pg|gq|qg|fg|gf|kg|gk|hn|nh|nh|hn|hk|kh|kd|dk|mj|jm|ds|sd|mk|km|lx|xw|kg|df|jy|lj|kf|bg|fc|jp|zz|gz|tj|faw|pj|jt|jm|td|keo|lg|dn|pt|kh|hx|jq|jz|kx|mz|px|qb|qc|qd|qf|qg|qh|qj|qk|ql|qm|qn|qp|qq|qr|qs|qt|qv|qw|qx|qy|qz|sx|vb|vc|vd|vf|vg|vh|vj|vk|vl|gj|jg|mt|tm|vm|vn|vp|vq|vr|vs|vt|vv|vw|vx|vy|vz|wb|wc|wd|wf|wg|wh|wj|wk|wl|wm|wn|wp|wq|wr|ws|hj|jh|wt|hf|fh|wv|ww|wx|wy|wz|xb|xc|xd|xf|xg|xh|xj|xk|xl|xm|xn|xo|xp|xq|xr|xs|xt|xv|xx|xy|xz|yb|yc|yd|yf|yg|yh|yj|yk|yl|ym|yn|yo|yp|yq|yr|ys|yt|yv|yw|yx|yy|yz|zb|zc|zd|zf|zg|zh|zj|zk|zl|zm|zn|zo|zp|zq|zr|zs|zt|zv|zw|zx|zy|0|1|2|3|4|5|6|7|8|9|\,|\.|\'|\;|\"|\`|\&|\*|\(|\)|\_|\=|\+|\\|\?|\>|\<|\{|\}|\[|\]/ }
];

function checkCapitalization(word) {
    if (word === word.toUpperCase() && word !== word.toLowerCase()) {
        return "uppercase";
    } else if (word === word.toLowerCase() && word !== word.toUpperCase()) {
        return "lowercase";
    } else if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        return "capitalized";
    } else if (word.charAt(0) === word.charAt(0).toLowerCase()) {
        return "lowercase";
    } else {
        return "Neither Capitalized nor Lowercase";
    }
}

function getSingularPlural(input, output) {
    var result;
    var wordForm;

    function formatResult(a) {
        if (wordForm === "uppercase") {
            a = a.toUpperCase();
        } else if (wordForm === "lowercase") {
            a = a.toLowerCase();

        } else if (wordForm === "capitalized") {
            a = a.charAt(0).toUpperCase() + a.slice(1);
        }
        return a;
    }


    if (input) {
        wordForm = checkCapitalization(input);

        //Invalid words starts  
        var obj2 = singular_plural[2];
        var inValidWords = Object.values(obj2);
        var inValidArray = (inValidWords.toString().slice(1, -1)).split('|');
        for (const inValidItems of inValidArray) {
            if (input.toLowerCase().match(inValidItems.toLowerCase())) {
                result = { "singular": null, "plural": null };
                return formatResult(result);
            }
        }


        //Irregular form starts       
        var obj = singular_plural[0];
        var singularKeys = Object.keys(obj);
        var singularValues = Object.values(obj);
        for (var i = 0; i < singularKeys.length; i++) {
            if (input.toLowerCase() === (singularKeys[i].toLowerCase()) || input.toLowerCase() === (singularValues[i].toLowerCase())) {
                var singular = singularKeys[i];
                var plural = singularValues[i];
                if (output && output === "s") {
                    result = singular;
                } else if (output && output === "p") {
                    result = plural;
                } else {
                    result = { "singular": formatResult(singular), "plural": formatResult(plural) };
                }
                return result;
            }
        }

        //Uncountable starts  
        var obj1 = singular_plural[1];
        var unCountValues = Object.values(obj1);
        var unCountArray = (unCountValues.toString().slice(1, -1)).split('|');
        for (const unItems of unCountArray) {
            if (input.toLowerCase() === unItems.toLowerCase()) {
                result = { "singular": input, "plural": input };
                return result;
            }
        }



        var firstChar = input.charAt(0);
        var middle;
        var lastChar = input.charAt(input.length - 1);
        var last3Char = input.substring(input.length - 3);
        if (lastChar === "y") {
            middle = input.slice(1, -1);
        } else if (last3Char === "ies") {
            middle = input.slice(1, -3);
        }

        if (input.endsWith("ey") === false && (input.endsWith("y") === true || input.endsWith("ies") === true)) {
            if (result === undefined) {
                var singular = firstChar + middle + 'y';
                var plural = firstChar + middle + 'ies';

                if (output && output === "s") {
                    result = singular;
                } else if (output && output === "p") {
                    result = plural;
                } else {
                    result = { "singular": singular, "plural": plural };
                }
                return result;
            }
        }


        var firstChar = input.charAt(0);
        var middle;
        var lastChar = input.charAt(input.length - 1);
        var last3Char = input.substring(input.length - 3);
        if (lastChar === "f") {
            middle = input.slice(1, -1);
        } else if (last3Char === "ves") {
            middle = input.slice(1, -3);
        }

        if (input.endsWith("f") === true || input.endsWith("ves") === true) {
            if (result === undefined) {
                var singular = firstChar + middle + 'f';
                var plural = firstChar + middle + 'ves';

                if (output && output === "s") {
                    result = singular;
                } else if (output && output === "p") {
                    result = plural;
                } else {
                    result = { "singular": singular, "plural": plural };
                }
                return result;
            }
        }

        var firstChar = input.charAt(0);
        var middle;
        var lastChar = input.charAt(input.length - 1);
        middle = input.slice(1, input.length);
        if (input.endsWith("s") === false && input.endsWith("h") === false && input.endsWith("x") === false) {
            var pFix = "s";
        } else {
            var pFix = "es"
        }
        if (result === undefined) {
            var singular = firstChar + middle;
            var plural = firstChar + middle + pFix;

            if (output && output === "s") {
                result = singular;
            } else if (output && output === "p") {
                result = plural;
            } else {
                result = { "singular": singular, "plural": plural };
            }
            return result;
        }
    }
    return result;
}


