function lott(tp, fmax, fn, smax) {
    let result = document.getElementById("result")
    let result2 = document.getElementById("result2")

    if (tp === 1) {
        let { ssarry, sp } = rdc(fmax, fn, smax);
        result.innerHTML = `威力彩號碼: ${ssarry.join("、")}, 特別號: ${sp}`;
        ssarry.sort(function (a, b) { return a - b; });
        result2.innerHTML = `威力彩號碼(重新排序後): ${ssarry.join("、")}, 特別號: ${sp}`;
    }

    if (tp === 2) {
        let { ssarry, sp } = rdc(fmax, fn, smax);
        result.innerHTML = `大樂透號碼: ${ssarry.join("、")}, 特別號: ${sp}`;
        ssarry.sort(function (a, b) { return a - b; });
        result2.innerHTML = `大樂透號碼(重新排序後): ${ssarry.join("、")}, 特別號: ${sp}`;
    }

    if (tp === 3) {
        let { ssarry } = rdc(fmax, fn, smax);
        result.innerHTML = `今彩號碼: ${ssarry.join("、")}`;
        ssarry.sort(function (a, b) { return a - b; });
        result2.innerHTML = `今彩號碼(重新排序後): ${ssarry.join("、")}`;
    }
}

function rdc(ffmax, ffn, ssmax) {
    let arry = [];
    let ssp;
    while (arry.length < ffn) {
        let rd = Math.floor(Math.random() * ffmax) + 1;
        // 主號
        if (!arry.includes(rd)) {
            arry.push(rd);
        }

        // 特別號
    }
    
    if (ssmax == 8) {
        ssp = Math.floor(Math.random() * ssmax) + 1;
    } else if (ssmax == 49) {
        while (1) {
            rd = Math.floor(Math.random() * ssmax) + 1;
            if (!arry.includes(rd)) {
                ssp = rd
                break;
            }
        }
    }
    return { ssarry: arry, sp: ssp };
}








