<template>
    <div>
        <div>
            <h1>Disordered Eating</h1>
            <p>Struggles with eating issues are are about more than just food, though if you are suffering from these issues you may not be able to explain what else is happening. What you do know is that you struggle a lot more than you want to with eating or not eating, gaining weight, keeping your current weight, or losing weight. All this holds so much of your attention that it's hard to get to what these eating issues are really about. So what is this "disordered eating" all about, then?</p>
        </div>
        <div class="d-flex flex-row flex-wrap justify-content-center">
            <b-btn to="/article/disordered-eating/terms-and-diagnosis">Terms and Diagnosis</b-btn>
            <b-btn to="/article/disordered-eating/understand">Understanding Disordered Eating</b-btn>
            <b-btn to="/article/disordered-eating/how-to-help">How To Help?</b-btn>
            <b-btn to="/article/disordered-eating/what-to-say">What To Say?</b-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleDisorderedEating',
    components: {

    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.btn {
    margin: 24px auto;
    background-color: #38C6D4;
    color: white;
    font-family: "Montserrat", "sans-serif";
    font-size: 14px;
    letter-spacing: 1px;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    transition: 0.3s;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
}

.btn:hover,
.btn:focus {
    -webkit-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    background-color: #1f7998 !important;
}

.btn:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
}
</style>