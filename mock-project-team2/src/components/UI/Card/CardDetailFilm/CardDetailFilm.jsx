import PropTypes from "prop-types"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CirclePercent from "../../CirclePercent/CircularBar"
import { customSrcImage, listWidthImages } from "../../../../constants"
import MenuSelect from "../../MenuSelect/MenuSelect"
import { memo, useState } from "react"

const CardDetailFilm = (props) => {
  const { width, height, listData, flexWrap, onClickCard } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const [isIdMovie, setIsIdMovie] = useState(null)
  const open = Boolean(anchorEl)
  const handleClickShow = (id) => {
    setIsIdMovie(id)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={{ display: "flex", flexWrap: flexWrap }}>
      {listData.map((movie) => (
        <Card
          key={movie.id}
          sx={{
            maxWidth: width,
            marginLeft: 4,
            marginBottom: 4,
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", right: 4, top: 4 }} onClick={() => handleClickShow(movie.id)}>
            <MenuSelect anchorEl={anchorEl} open={open} handleClick={handleClick} handleClose={handleClose} />
          </div>
          <CardMedia
            onClick={() => onClickCard(movie.id)}
            sx={{
              height: height,
              width: width,
              borderRadius: 2,
              objectFit: "cover",
            }}
            image={customSrcImage(listWidthImages.w500, movie.poster_path ?? movie.backdrop_path)}
            title={movie.title || movie.original_name}
          />
          <CardContent style={{ position: "relative", padding: "22px 0 10px 10px" }}>
            <div style={{ position: "absolute", top: -26 }}>
              <CirclePercent width={38} height={38} percent={movie.vote_average} />
            </div>
            <Typography
              onClick={() => onClickCard(movie.id)}
              gutterBottom
              variant="body2"
              component="div"
              style={{ fontWeight: 700 }}
            >
              {movie.title ?? movie.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ paddingBottom: 10 }}>
              {movie.release_date || movie.first_air_date}
            </Typography>
          </CardContent>
          {open && isIdMovie === movie.id && (
            <div className="visible opacity-100 absolute bg-[rgba(0,0,0,0.5)] backdrop-blur-[20px] w-full h-full z-[5] transition-[linear] duration-[0.1s] left-0 top-0"></div>
          )}
        </Card>
      ))}
    </div>
  )
}

CardDetailFilm.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  listData: PropTypes.array,
  flexWrap: PropTypes.string,
  onClickCard: PropTypes.func,
}

export default memo(CardDetailFilm)
