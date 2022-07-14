import * as React from "react";

import classes from "./logoSvg.module.css";

const logoSvg = (props) => (
	<svg className={classes.svgIcon} viewBox="0 0 20 20" {...props}>
		<path
			fill="none"
			d="m9.797 2.214-.995.124c-.624.155-1.304.302-1.809.597-1.347.788-2.281 1.708-2.906 3.204-.102.242-.105.476-.178.745-.48 1.744.37 3.548 1.402 4.173.198.119.649.332.815.049.092-.156.071-.364.128-.546.037-.12.154-.347.127-.496-.046-.255-.319-.416-.434-.62-.232-.417-.244-.786-.357-1.343l.026-.224c.034-.623.139-1.072.332-1.515.564-1.301 1.47-2.025 2.931-2.458.327-.097 1.25-.252 1.734-.149l.866.149c1.048.33 1.811.938 2.218 1.888.256.591.33 1.725.154 2.483-.085.36-.072.667-.179.993-.397 1.206-.979 2.323-2.295 2.633a1.472 1.472 0 0 1-1.733-.869c-.06-.151-.161-.418-.101-.671.229-.978.56-1.854.815-2.831.243-.931-.218-1.665-.943-1.837-.902-.215-1.599.619-1.836 1.165-.189.434-.303 1.235-.153 1.814.047.183.269.674.23.844a44.107 44.107 0 0 1-.587 2.31c-.223.771-.344 1.562-.56 2.311-.1.342-.096.709-.179 1.066v.521c-.075.33-.019.916.051 1.242.045.209-.027.467.076.621.002.111.017.135.052.199.319-.01.758-.848.917-1.094.304-.467.584-.967.816-1.514.208-.494.241-1.039.408-1.566.12-.379.292-.824.331-1.24h.025c.066.229.306.395.485.52.56.4 1.525.77 2.573.523 1.188-.281 2.133-.838 2.755-1.664.457-.609.804-1.313 1.07-2.112.131-.392.158-.826.256-1.241.241-1.043-.082-2.298-.384-2.981-.914-2.067-2.859-3.247-5.964-3.203"
		/>
	</svg>
);

export default logoSvg;
