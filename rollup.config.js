import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
    input: 'src/Navigation.jsx',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'Navigation',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ]
}
export default config