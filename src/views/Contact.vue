<template>
    <background>
        <container id="contact">
            <spacer />
            <spacer />
            <h1> Contact Us </h1>
            <row v-if="!emailSent">
                <column class="dark" :width="1/3">
                    <p> Address </p>
                    <p> Phone Number </p>
                </column>
                <column class="light" :width="2/3">
                    <h4> Your Name </h4>
                    <input type="text" />
                    <h4> Your Email </h4>
                    <input type="text" />
                    <h4> Subject </h4>
                    <input type="text" />
                    <h4> Your Message </h4>
                    <textarea />
                    <spacer />
                    <button class="big" @click="sendMail()"> Send </button>
                </column>
            </row>
            <h2 v-if="emailSent"> Email Sent! </h2>
            <spacer />
            <spacer />
            <spacer />
        </container>
    </background>
</template>

<script>
export default {
    name: 'contact',
    data () {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            emailSent: false
        }
    },
    methods: {
        async sendMail () {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subject: this.subject, message: this.message, email: this.email })
            }
            await fetch('/mail.php', requestOptions);
            this.emailSent =true;
        }
    }
}
</script>

<style scoped>
    h1 {
        text-shadow: 1px 0px 8px #000000, -1px 0px 8px #000000, 0px 1px 8px #000000, 0px -1px 8px #000000;
        color: rgb(236, 236, 236);
    }
    .background {
        background-image: url('../assets/contact-background.jpg');
    }
    .row {
        align-items: center;
        justify-items:end;
        background-color: rgb(40, 40, 40);
    }
    .light {
        background-color: rgb(200,200,200);
        color: rgb(40, 40, 40);
        padding-bottom: 10px;
    }
    input {
        text-align: center;
        font-size: 1.2em;
    }
    input, textarea {
        margin-left: 10px;
        margin-right: 10px;
        font-size: 1em;
    }
    button {
        background-color: rgb(40, 36, 36);
        color: rgb(236, 236, 236);
        width: 3em;
        margin: auto;
        transition: 0.3s;
    }
    button:hover {
        color: black;
        background-color: rgb(77, 245, 55);
    }
</style>