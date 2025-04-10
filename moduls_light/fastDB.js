import { random, sleep, echo } from '/light.js'

export class fastDB {
  constructor(maxTemp = 256) {
    this.temp = {}
    this.clusters = {
      main: {}
    }
    this.maxTemp = maxTemp
  }
  
  viewAllClusters() {
    return Object.entries(this.clusters)
  }
  
  newClaster(name) {
    if (!this.clusters[name]) {
      this.clusters[name] = {}
    }
  }
  delClaster(name) {
    delete this.clusters[name]
  }
  
  merge(cluster = "main", newData) {
    if (!this.clusters[cluster]) {
      this.clusters[cluster] = {}
    }
    this.clusters[cluster] = {...this.clusters[cluster], ...newData}
  }
  
  move(cluster1 = "main", cluser2 = "main", key) {
    if (this.clusters[cluster1]?.[key] != null) {
      const value = this.clusters[cluster1][key]
      this.set(cluster2, key, value) 
      this.delete(cluster1, key)
    } else {
      echo('Key "${key}" not found in cluster "${cluster1}"')
    }
  }
  
  set(cluster = "main", key, value) {
    if (!this.clusters[cluster]) {
      this.clusters[cluster] = {}
    }
    this.clusters[cluster][key] = value
  }
  
  get(cluster = "main", key) {
    return this.clusters?.[cluster]?.[key] || null
  }
  
  delete(cluster="main", key) {
    delete this.clusters[cluster][key]
  }
  
  async clone(claster, key) {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(JSON.parse(JSON.stringify(this.get(claster, key))))
      }, 1000)
    })
  }
  
  async cloneDB() {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(JSON.parse(JSON.stringify(this.clusters)))
      }, 1000)
    })
  }
  
  async setTemp(key, value, time = 120000) {
    if (Object.keys(this.temp).length >= this.maxTemp) {
      const first = Object.keys(this.temp)[0]
      delete this.temp[first]
      
    }
    this.temp[key] = value 
    await sleep(time)
    delete this.temp[key]
  }
  
  getTemp(key) {
    if (this.temp[key] == null || this.temp[key] == undefined) {
      return null
    }
    return this.temp[key]
  }
  
  clearTemp() {
    this.temp = {}
  }
  
  clearDB() {
    this.clusters = { main: {}}
  }
  
  clearCluster(cluster = "main") {
    return Object.keys(this.clusters[cluster]) || {}
  }
  
  
}


