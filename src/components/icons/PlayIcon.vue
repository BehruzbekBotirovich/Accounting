<template>
    <a class="button is-play" >
        <div class="button-outer-circle has-scale-animation"></div>
        <div class="button-outer-circle has-scale-animation has-delay-short"></div>
        <div class="button-icon is-play">
            <svg height="100%" width="100%" fill="#f857a6">
                <polygon class="triangle" points="5,0 30,15 5,30" viewBox="0 0 30 15" />
                <path class="path" d="M5,0 L30,15 L5,30z" fill="none" stroke="#f857a6" stroke-width="1" />
            </svg>
        </div>
    </a>
</template>

<script setup>
</script>

<style scoped>
:root {
    --main-color: #f857a6;
    --second-color: #ff5858;
}


@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes triangleStroke {
    from {
        stroke-dashoffset: 90;
    }

    to {
        stroke-dashoffset: 0;
    }
}

@keyframes smallScale {
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1.8);
        opacity: 0;
    }
}



.button {
    display: inline-block;
    position: relative;

    &.is-play {
        background-color: #fff;
        border-radius: 50%;
        width: 100px;
        height: 100px;

        .button-outer-circle {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
        }

        .button-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 30px;
            height: 30px;
            transform: translate(-50%, -50%);

            .triangle {
                animation: fadeIn 7s ease;
            }

            .path {
                stroke-dasharray: 90;
                stroke-dashoffset: 0;
                animation: triangleStroke 3s ease;
            }
        }
    }
}

.has-scale-animation {
    animation: smallScale 3s infinite;
}

.has-delay-short {
    animation-delay: 0.5s;
}
</style>