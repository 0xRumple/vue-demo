<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand">
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item is-tab" exact>
                        Home
                    </router-link>
                    <router-link to="/apply" class="navbar-item is-tab" exact>
                        Apply
                    </router-link>
                </div>
                <div class="navbar-end">
                    <router-link to="/register" class="navbar-item is-tab" exact>
                        Register
                    </router-link>
                    <router-link to="/login" class="navbar-item is-tab" exact>
                        Login
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
