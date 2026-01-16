export default async function (context) {
	context.log("Log from the serverless function");
	return context.res.text("This is a response from serverless function");
}
