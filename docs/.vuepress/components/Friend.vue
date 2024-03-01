<style scoped>
  .link-group {
  width: 100%;
  list-style: none;
  margin-top: 10px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 33.33%);
}

.link-item {
  margin: 4px;
  cursor: pointer;

  .content {
    border: 1px solid #eaeaea;
    border-radius: 10px;
    padding: 13px 30px 13px 20px;
    overflow: hidden;
    @include transition(all ease .3s);

    a {
      text-decoration: none;

      img {
        padding: 2px;
        border-radius: 100%;
        max-width: 100%;
        float: right;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, .9) ;
        margin-top: 5px;
        margin-right: -15px;
        width: 65px;
        height: 65px;
      }

      span.sitename {
        color: #377bb5;
        padding: 8px 0 13px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 600;
      }

      .desc {
        color: #7f7f7f;
        font-size: 13px;
        padding: 10px 0;
        border-top: 1px dashed #ddd;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 15px;
      }
    }

    &:hover {
      border: 1px solid transparent;
      box-shadow: 0 2px 16px 0 rgba(27, 35, 47, .2);
      @include transform(translate(0px, -3px));
    }
  }
}

@media (max-width: 1200px) {
  .link-section {
    width: 75%;
  }
}

@media (max-width: 1023px) {
  .link-section {
    width: 85%;
  }

  .link-group {
    grid-template-columns: repeat(2, 49.5%);
  }
}

@media (max-width: 419px) {
  .link-section {
    width: 100%;

    h2 {
      margin-left: 17px;
    }
  }

  .link-group {
    grid-template-columns: repeat(1, 100%);
  }

  .link-item {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
<template>
  <div class="links-wrapper">
    <!-- <div v-for="(group, groupId) in frontmatter.links" :key="`link-group-${groupId}`" class="link-section">
      <h2>{{ group.title }}</h2> -->
      <div class="link-group">
        <!-- <div v-for="(item, itemId) in group.items" :key="`link-${itemId}`" class="link-item">
          <div class="content">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">
              <img :src="$withBase(item.img)" />
              <span class="sitename">
                {{ item.sitename }}
              </span>
              <div class="desc">
                {{ item.desc }}
              </div>
            </a>
          </div>
        </div> -->

        <div class="link-item" v-for="(item,index) in friends">
          <div class="content">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">
              <img :src="item.avator" />
              <span class="sitename">
                {{item.name}}
              </span>
              <div class="desc">
                {{item.desc}}
              </div>
            </a>
          </div>
        </div>


      </div>
    <!-- </div> -->
  </div>


</template>

<script>
import friends from './friends';
export default {
  data() {
    return {
      friends
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-image: -moz-linear-gradient(45deg, rgb(189, 255, 255), rgb(217, 255, 173));

  background-image: -webkit-linear-gradient(45deg, rgb(189, 255, 255), rgb(217, 255, 173));

  background-image: linear-gradient(45deg, rgb(189, 255, 255), rgb(217, 255, 173));
  margin-top: 1rem;
}

.card-header {
  display: flex;
  align-items: center;
}

.contact {
  margin-top: 0.3rem;
}

.contact a {
  margin: 0 0.3rem;
}

.intro {
  display: inline-block;
  color: rgb(34, 120, 196)
}


</style>
