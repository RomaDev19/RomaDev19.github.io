<form class="form-calculator">
    <div class="form-calculator-top-wrap">
        <h3 class="form-calculator__title">
            Calculator
        </h3>

        <div class="form-calculator-top">
            <div class="item">
                <label class="form-calculator__label label-form"><input class=
                "form-calculator__input input-form js-focus" id="js-amount" name=
                "amount" placeholder="Sum" type="text"></label>
            </div>

            <div class="item">
                <div class="form-calculator__label">
                    <select id="js-plan" name="select">
                        <option value="1">
                            5 Jours
                        </option>
                        <option value="2">
                            10 Jours
                        </option>
                        <option value="3">
                            30 Jours
                        </option>
                        <option value="4">
                            100 Jours
                        </option>
                        <option value="5">
                            165 Jours
                        </option>
                        <option value="6">
                            200 Jours
                        </option>
                        <option value="7">
                            285 Jours
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="form-calculator-result">
        <div class="result-list">
            <div class="result-item">
                <i class="result-item__icon hours--icon"></i>
                <div class="result-item__title" id="js-for-profit">
                    Bénéfice quotidien:
                </div>

                <div class="result-item__value">
                    <span class="symbol-current"><svg class="bm-currency" role=
                    "img">
                    <use xlink:href="#bm_icon_currency_bold_usd">
                    </use></svg></span> <span id="js-profit"></span>
                </div>

                <div class="result-item__line">
                </div>
            </div>

            <div class="result-item">
                <i class="result-item__icon wallet--icon"></i>
                <div class="result-item__title" id="js-for-total">
                    Bénéfice total:
                </div>

                <div class="result-item__title">
                </div>

                <div class="result-item__value">
                    <span class="symbol-current"><svg class="bm-currency" role=
                    "img">
                    <use xlink:href="#bm_icon_currency_bold_usd">
                    </use></svg></span> <span id="js-total"></span>
                </div>

                <div class="result-item__line">
                </div>
            </div>
        </div>
    </div>

</form>