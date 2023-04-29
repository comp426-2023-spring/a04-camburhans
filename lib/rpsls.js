import minimist from 'minimist'

export function rps(shot = null) {
    const shot_options = ["rock", "paper", "scissors"]
    const sim_shot = shot_options[Math.floor(Math.random() * shot_options.length)]

}