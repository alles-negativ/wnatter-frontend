<template>
    <div class="nav"> 
        <div class="nav__content">
            <p class="nav__content--text" onclick="scrollFirma()">Firma ↓</p>
            <p class="nav__content--text" onclick="scrollAngebot()">Angebot ↓</p>
            <p class="nav__content--text" onclick="scrollPerson()">Team ↓</p>
            <p class="nav__content--text" onclick="scrollContact()">Kontakt ↓</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',

    data() {
        return {
            navigation: [],
        }
    },
}
</script>

<style lang="scss" scoped>
    @use "Navigation";
</style>