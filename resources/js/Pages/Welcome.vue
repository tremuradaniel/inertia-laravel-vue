<template>
    <layout>
        <div>
            <h1>Hello, inertia!!</h1>
            <h5>Foo: {{foo}}</h5>
        </div>
    </layout>
</template>

<<script>
    import Layout from '@/Shared/Layout'

    export default {
        props: {
            'foo': {
                type: String
            }
        },
        components: {
            'layout': Layout
        }
    }
</script>