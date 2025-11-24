import cluster from 'node:cluster'
import os from 'node:os'
import process from 'node:process'
import app from '../src'
import Elysia from 'elysia'

if (cluster.isPrimary) {
  	for (let i = 0; i < os.availableParallelism(); i++)
    	cluster.fork()
} else {
  	new Elysia().use(app).listen(3000)
  	console.log(`Worker ${process.pid} started`)
}