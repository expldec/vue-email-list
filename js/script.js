const app = new Vue(
    {
        el : '#root',
        data: {
            emailArray: [],
            
        },
        computed: {
        },
        methods: {
            getEmail: function() {
                let fetchedEmail = 'testd'
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    fetchedEmail = response.data.response;
                    console.log(fetchedEmail);
                    this.emailArray.push(fetchedEmail);
                }); 
            },
            buildEmailArray: function(numberOfItems) {
                this.emailArray = [];
                for (let i = 0; i < numberOfItems; i++) {
                    this.getEmail();
                }
            },
            
        },
        mounted() {
            this.buildEmailArray(10)
        },
    }
)